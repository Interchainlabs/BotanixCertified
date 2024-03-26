'use client';

import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import { range } from 'lodash';
import React, { ForwardedRef, forwardRef } from 'react';
import DatePickerComponent from 'react-datepicker';

import { Select } from '../select';

// Year list as far back as 1930
const years = range(1930, dayjs(new Date()).year() + 1, 1);
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DatePicker = ({
  selectedDate,
  setSelectedDate,
  errorMessage,
}: {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  errorMessage?: string;
}) => {
  return (
    <DatePickerComponent
      showPopperArrow={false}
      dateFormat="dd-MMMM-yyyy"
      renderCustomHeader={({ date, changeYear, changeMonth }) => {
        const selectedYear = dayjs(date).year();
        const selectedMonth = months[dayjs(date).month()];

        return (
          <div className="flex gap-4 p-4">
            <Select
              value={selectedYear}
              listValue={years}
              selectedDisplayValue={selectedYear}
              customBtnClass="text-white bg-[#25282B]"
              onChange={(value) => {
                changeYear(value);
                setSelectedDate(dayjs(date).set('year', value).toDate());
              }}
            />

            <Select
              value={selectedMonth}
              listValue={months}
              selectedDisplayValue={<span>{selectedMonth}</span>}
              customBtnClass="text-white bg-[#25282B]"
              onChange={(value) => {
                changeMonth(months.indexOf(value));
                setSelectedDate(dayjs(date).set('month', months.indexOf(value)).toDate());
              }}
            />
          </div>
        );
      }}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      customInput={<InputElement errorMessage={errorMessage} />}
    />
  );
};

const InputElement = forwardRef(
  (
    { value, onClick }: { value?: string; onClick?: () => void; errorMessage?: string },
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <label className="flex w-full">
      <input
        placeholder="DD-MM-YY"
        className="w-full rounded border-none bg-[#25282B] p-4 focus:ring-0"
        name="dom"
        value={value}
        readOnly
        onClick={() => onClick?.()}
        ref={ref}
      />

      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        className="absolute right-3 top-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_63_70162)">
          <path
            d="M22.7394 2.24741L16.7342 2.24744V0.752685C16.7342 0.33831 16.3986 0.00268555 15.9842 0.00268555C15.5698 0.00268555 15.2342 0.33831 15.2342 0.752685V2.24706H9.23419V0.752685C9.23419 0.33831 8.89857 0.00268555 8.48419 0.00268555C8.06982 0.00268555 7.73419 0.33831 7.73419 0.752685V2.24706H1.73944C0.911066 2.24706 0.239441 2.91869 0.239441 3.74706V22.4971C0.239441 23.3254 0.911066 23.9971 1.73944 23.9971H22.7394C23.5678 23.9971 24.2394 23.3254 24.2394 22.4971V3.74706C24.2394 2.91904 23.5678 2.24741 22.7394 2.24741ZM22.7394 22.4971H1.73944V3.74706H7.73419V4.50269C7.73419 4.91704 8.06982 5.25269 8.48419 5.25269C8.89857 5.25269 9.23419 4.91704 9.23419 4.50269V3.74744H15.2342V4.50306C15.2342 4.91744 15.5698 5.25306 15.9842 5.25306C16.3986 5.25306 16.7342 4.91744 16.7342 4.50306V3.74744H22.7394V22.4971ZM17.4894 11.9974H18.9894C19.4034 11.9974 19.7394 11.6614 19.7394 11.2474V9.74741C19.7394 9.33341 19.4034 8.99741 18.9894 8.99741H17.4894C17.0754 8.99741 16.7394 9.33341 16.7394 9.74741V11.2474C16.7394 11.6614 17.0754 11.9974 17.4894 11.9974ZM17.4894 17.997H18.9894C19.4034 17.997 19.7394 17.6614 19.7394 17.247V15.747C19.7394 15.333 19.4034 14.997 18.9894 14.997H17.4894C17.0754 14.997 16.7394 15.333 16.7394 15.747V17.247C16.7394 17.6618 17.0754 17.997 17.4894 17.997ZM12.9894 14.997H11.4894C11.0754 14.997 10.7394 15.333 10.7394 15.747V17.247C10.7394 17.6614 11.0754 17.997 11.4894 17.997H12.9894C13.4034 17.997 13.7394 17.6614 13.7394 17.247V15.747C13.7394 15.3334 13.4034 14.997 12.9894 14.997ZM12.9894 8.99741H11.4894C11.0754 8.99741 10.7394 9.33341 10.7394 9.74741V11.2474C10.7394 11.6614 11.0754 11.9974 11.4894 11.9974H12.9894C13.4034 11.9974 13.7394 11.6614 13.7394 11.2474V9.74741C13.7394 9.33304 13.4034 8.99741 12.9894 8.99741ZM6.98944 8.99741H5.48944C5.07544 8.99741 4.73944 9.33341 4.73944 9.74741V11.2474C4.73944 11.6614 5.07544 11.9974 5.48944 11.9974H6.98944C7.40344 11.9974 7.73944 11.6614 7.73944 11.2474V9.74741C7.73944 9.33304 7.40344 8.99741 6.98944 8.99741ZM6.98944 14.997H5.48944C5.07544 14.997 4.73944 15.333 4.73944 15.747V17.247C4.73944 17.6614 5.07544 17.997 5.48944 17.997H6.98944C7.40344 17.997 7.73944 17.6614 7.73944 17.247V15.747C7.73944 15.3334 7.40344 14.997 6.98944 14.997Z"
            fill="#FAFAFA"
            fill-opacity="0.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_63_70162">
            <rect width="24" height="24" fill="white" transform="translate(0.239441)" />
          </clipPath>
        </defs>
      </svg>
    </label>
  )
);

InputElement.displayName = 'CustomInput';

export { DatePicker };
