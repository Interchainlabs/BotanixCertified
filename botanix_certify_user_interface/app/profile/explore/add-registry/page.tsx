'use client';

import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components';
import { Button, CheckBox, DatePicker, Select } from '@/ui';
import genres from './genres.json';
import { RadioGroup } from '@headlessui/react';
import { useFieldArray, useForm } from 'react-hook-form';

const AddRegistryPage = () => {
  const [publicationDate, setPublicationDate] = useState<Date | null>(null);

  let [plan, setPlan] = useState('startup');

  const { register, control, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      colaborators: [{ name: '' }],
      creatorName: '',
      contentName: '',
      contentType: 'Music',
      contentSummary: '',
      musicFile: '',
      musicSamples: '',
      samplesURL: '',
      remixURL: '',
      coverImage: '',
      coverImageLink: '',
      tAndC: false,
      acknowledgement: false,
    },
  });

  const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({
    control,
    name: 'colaborators',
  });

  console.log(watch());

  return (
    <section className="flex w-full flex-col ">
      <PageHeader />

      <form className="mb-20 mt-[4.0625rem] flex w-fit flex-col gap-12 pl-[6.25rem] text-[#A0A4A8]">
        <fieldset className="flex flex-col gap-8">
          <h3>BASIC INFORMATION</h3>

          <div className="flex gap-6">
            <div className="flex w-full min-w-[340px] flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Content Name
              </label>

              <input
                type="text"
                {...register('contentName')}
                placeholder="Enter Name"
                className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
              />
            </div>

            <div className="flex w-full min-w-[340px] flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Content Type
              </label>

              <Select
                onChange={(value) => setValue('contentType', value)}
                listValue={['Music']}
                label="Choose Content Type"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex w-full min-w-[340px] flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Creator Name
              </label>

              <input
                type="text"
                {...register('creatorName')}
                placeholder="Enter Creator name"
                className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
              />
            </div>

            <div className="flex w-full min-w-[340px] flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Genre
              </label>

              <Select listValue={genres} multiple />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              Content Summary
            </label>

            <textarea
              placeholder="Enter a description about the project"
              {...register('contentSummary')}
              className="h-[113px] rounded border-none bg-[#25282B] p-4 focus:ring-0"
            />
          </div>

          <div className="flex gap-6">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Publication Date
              </label>

              <DatePicker selectedDate={publicationDate} setSelectedDate={setPublicationDate} />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="" className="text-[0.75rem]">
                Creation Date
              </label>

              <DatePicker selectedDate={publicationDate} setSelectedDate={setPublicationDate} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <p className="text-[0.75rem]">
              Upload music file <span className="text-red-500">*</span>
            </p>

            <label className="border-blue flex w-64 cursor-pointer flex-col items-center rounded-lg border bg-primary-main px-4 py-6 uppercase tracking-wide text-white shadow-lg hover:bg-primary-dark hover:text-white">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>

              <span className="mt-2 text-base leading-normal">Select music file</span>

              <input type="file" accept="audio/*" {...register('musicFile')} className="hidden" />
            </label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <h3>SAMPLES & COLLABORATORS CREDIT</h3>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              Samples information (If any)
            </label>

            <input
              type="text"
              placeholder="e.g: https://topeaniyikaye.webflow.io/"
              {...register('musicSamples')}
              className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              Co-Owners/Collaborators (If Applicable)
            </label>

            <ul className="flex w-full flex-col gap-2">
              {fields.map((item, index) => (
                <li key={item.id} className="flex w-full items-center gap-3">
                  <input
                    {...register(`colaborators.${index}.name`)}
                    className="w-1/2 rounded border-none bg-[#25282B] p-4 focus:ring-0"
                  />

                  <button type="button" onClick={() => remove(index)}>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-9 w-9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99999 12.6667C3.99999 13.4 4.59999 14 5.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V4.66667H3.99999V12.6667ZM12.6667 2.66667H10.3333L9.66666 2H6.33333L5.66666 2.66667H3.33333V4H12.6667V2.66667Z"
                        fill="#FB4E4E"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <Button label="Add" customClassName="!w-fit" onClick={() => append({ name: '' })} />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              Samples URL and Collaborators’ work
            </label>

            <input
              type="text"
              placeholder="e.g: https://topeaniyikaye.webflow.io/"
              {...register('samplesURL')}
              className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <h3>REMIX INFORMATION (If applicable)</h3>

          <div className="flex gap-6">
            <RadioGroup value={plan} onChange={setPlan} className="flex flex-col gap-4">
              <RadioGroup.Label className="text-[0.75rem]">
                Is the content a remix?
              </RadioGroup.Label>

              {['Yes', 'No'].map((field) => (
                <RadioGroup.Option value={field} key={field}>
                  {({ checked }) => (
                    <Fragment>
                      <input
                        checked={checked}
                        id={field}
                        type="radio"
                        value={field}
                        name="default-radio"
                        className="h-6 w-6  border-primary-main bg-black-dark  text-primary-main focus:ring-2 focus:ring-primary-main "
                      />

                      <label htmlFor={field} className="ml-4 text-sm font-medium ">
                        {field}
                      </label>
                    </Fragment>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              URL to related remix content
            </label>

            <input
              type="text"
              placeholder="e.g: https://topeaniyikaye.webflow.io/"
              {...register('remixURL')}
              className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <h3>COVER ART</h3>

          <div className="flex w-full flex-col gap-2">
            <p className="text-[0.75rem]">Upload image</p>

            <label className="border-blue flex w-64 cursor-pointer flex-col items-center rounded-lg border bg-primary-main px-4 py-6 uppercase tracking-wide text-white shadow-lg hover:bg-primary-dark hover:text-white">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>

              <span className="mt-2 text-base leading-normal">Select a file</span>

              <input type="file" accept="image/*" {...register('coverImage')} className="hidden" />
            </label>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="text-[0.75rem]">
              Provide link in file absence
            </label>

            <input
              type="text"
              placeholder="e.g: https://topeaniyikaye.webflow.io/"
              {...register('coverImageLink')}
              className="rounded border-none bg-[#25282B] p-4  focus:ring-0"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <h3>TERMS OF SERVICE AND ACKNOWLEDGEMENT</h3>

          <CheckBox
            checked={watch().tAndC}
            onChange={(event) => setValue('tAndC', event.target.checked)}
            name="t&c"
            label="I accept the Terms of Service"
          />

          <CheckBox
            checked={watch().acknowledgement}
            onChange={(event) => setValue('acknowledgement', event.target.checked)}
            name="acknowledgement"
            label="I acknowledge that the information provided are accurate and authentic."
          />
        </fieldset>

        <Button label="Submit" customClassName="!w-fit" />
      </form>
    </section>
  );
};

export default AddRegistryPage;
