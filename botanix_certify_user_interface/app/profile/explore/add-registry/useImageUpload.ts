'use client';

import { processFileToDataURL } from '@/app/utils';
import { useState } from 'react';

export interface ImageUploadValidatorProps {
  sizeInMb?: number;
  imageType?: string;
}

const useImageUpload = (
  updateFileHandler: (file: string) => void = () => {},
  validators?: ImageUploadValidatorProps
) => {
  const [selectedFile, setSelectedFile] = useState('');

  // Handles business logo
  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const isValid = validateSelectedFile(file);
    if (!isValid) return;

    setSelectedFile(e.target.value);
    processFileToDataURL(file, saveSelectedFile);
  };

  // Saves file to store and to hook form
  const saveSelectedFile = (fileData: string | ArrayBuffer | null) => {
    if (!fileData) return;

    const dataURL = String(fileData);
    updateFileHandler(dataURL);
  };

  // Validates selected logo props
  const validateSelectedFile = (file: File | undefined) => {
    const errorMessage = 'Error attaching file.';

    const { sizeInMb = 1, imageType = 'image' } = validators || {};

    if (!file) {
      return false;
    }

    if (file?.size && file.size >= sizeInMb * 1024 * 1024) {
      return {
        message: errorMessage,
        subtitle: `The file is too large. Should be less than ${sizeInMb}MB.`,
      };
    }

    if (file?.type && !file.type.includes(imageType)) {
      return false;
    }

    return true;
  };

  return { handleFileInputChange, selectedFile, setSelectedFile };
};

export default useImageUpload;
