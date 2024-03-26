'use client'

import { Listbox, ListboxProps, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { ElementType, Fragment } from 'react'
import ChevronDownIcon from '@/public/svgs/chevron-down.svg'

type SelectProps<TTag extends ElementType, TType, TActualType> = ListboxProps<TTag, TType, TActualType> & {
  selectedDisplayValue?: React.ReactNode
  listValue: TType[]
  label?: string
  customBtnClass?: string
  errorMessage?: string
  customListOptionsClass?: string
}

const Select = <TTag extends ElementType, TType extends React.ReactNode, TActualType>({
  selectedDisplayValue,
  value,
  listValue,
  onChange,
  label,
  customBtnClass,
  errorMessage,
  customListOptionsClass,
  multiple,
}: SelectProps<TTag, TType, TActualType>) => {
  return (
    <React.Fragment>
      <Listbox value={value} onChange={onChange} multiple={multiple}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={clsx(
                'relative flex h-[48px] min-h-[56px] w-full items-center justify-between gap-2 rounded bg-[#25282B] px-[14px] py-[10px] [&>*]:max-w-[unset] [&>*]:text-base',
                open && 'bg-cool-gray-100',
                errorMessage ? 'border-red-500' : 'border-black-60',
                customBtnClass,
              )}
            >
              {({ value }) => {
                const selectedValue = selectedDisplayValue || value
                const selectIsArray = Array.isArray(selectedValue)

                return (
                  <Fragment>
                    <span className={clsx('max-w-[50px] truncate text-[14px] capitalize')}>
                      {selectIsArray ? value.join(',  ') : selectedValue || label}
                    </span>

                    <ChevronDownIcon
                      className={clsx(
                        'min-h-[20px] min-w-[20px] transition-transform duration-200',
                        open && '-rotate-180',
                      )}
                    />
                  </Fragment>
                )
              }}
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-out duration-200"
              enter="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <Listbox.Options
                className={clsx(
                  'absolute z-10 mb-1 max-h-[200px] w-full overflow-auto rounded-md p-1 text-base bg-black-80 shadow-lg focus:outline-none sm:text-sm',
                  customListOptionsClass,
                )}
              >
                {listValue.map((option, idx) => {
                  return (
                    <Listbox.Option
                      key={idx}
                      className={({ active, selected }) =>
                        clsx(
                          'relative cursor-pointer select-none rounded-lg border-b-black-50/10 p-3 ',
                          active && !selected ? 'hover:bg-black-40 text-black-dark' : '',
                          selected ? 'bg-primary-main !text-white' : 'text-cool-gray-600',
                        )
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <span className={clsx('block truncate capitalize', selected ? 'font-medium' : 'font-normal')}>
                          {option}
                        </span>
                      )}
                    </Listbox.Option>
                  )
                })}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>

      {errorMessage && <p className="body-small">{errorMessage}</p>}
    </React.Fragment>
  )
}

export { Select }
