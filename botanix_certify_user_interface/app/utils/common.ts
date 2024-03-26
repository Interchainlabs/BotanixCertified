// converts base64/URLEncoded data component to raw binary data held in a string
// SRC: https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata

export function dataURItoFile(dataURI: string | undefined, fileName?: string) {
  if (!dataURI) {
    return undefined;
  }

  let byteString = '';
  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
  else byteString = decodeURI(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new File([ia], fileName || window.crypto.randomUUID(), { type: mimeString });
}

// File to dataURL processor
export function processFileToDataURL(
  file: File | undefined,
  successCallback: (result: string | ArrayBuffer | null) => void
) {
  if (!file) {
    successCallback(null);
    return;
  }

  const reader = new FileReader();

  reader.onloadend = function () {
    const result = reader.result;
    successCallback(result);
  };

  reader.readAsDataURL(file);
}

// Get Avatar Initials
export function getAvatarInitials(name?: string | null) {
  if (!name) {
    return '';
  }

  const [first, second] = name.split(' ');
  let initials = '';

  if (!second) {
    initials += first.slice(0, 2);
  } else {
    initials += first[0] + second[0];
  }

  return initials;
}

// Pagination range with dots
export function calPaginationRangeWithDots(c: number, m: number) {
  const current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [];

  let l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}
