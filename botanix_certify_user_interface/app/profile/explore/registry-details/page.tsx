'use client';

import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components';
import { Button, CheckBox, DatePicker, Select } from '@/ui';

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

  return (
    <section className="mb-[6.25rem] flex w-full max-w-[41.3125rem] flex-col text-white">
      <PageHeader title="Registration Details" btnLabel="Explore" />

      <div className="] mb-[2.125rem] mt-16">
        <div className="flex w-fit flex-col gap-6 rounded-lg border border-[#3C3A3A] p-4">
          <p className="text-body-bold">Processing & Dispute info</p>

          <p className=" text-caption text-black-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <div>
        <h6 className="mb-1 text-[0.75rem] text-black-40">Registration ID</h6>
        <p>#234567</p>
      </div>

      <h3 className="my-6 text-black-60">BASIC INFORMATION</h3>

      <section className="flex w-full flex-wrap justify-between text-black-10">
        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Content Name</h6>
          <p>See Gobe</p>
        </div>

        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Content Type</h6>
          <p>Music</p>
        </div>

        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Creator Name</h6>
          <p>John Doe</p>
        </div>

        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Genre</h6>
          <p>Afro Beat</p>
        </div>
      </section>

      <div className="mt-8">
        <h6 className="mb-2 text-[0.75rem] text-black-40">Content Summary</h6>

        <p className="rounded-[0.25rem] bg-[#101112] p-4 text-caption/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <section className="mt-8 flex w-full flex-wrap justify-between text-black-10">
        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Publication Date</h6>
          <p>30-02-2023</p>
        </div>

        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Creation Date</h6>
          <p>30-02-2023</p>
        </div>

        <div className="max-w-[170px]">
          <h6 className="mb-1 text-[0.75rem] text-black-40">Creator Name</h6>
          <p className="truncate">https://topeaniyikaye.webflow.io/</p>
        </div>
      </section>

      <h3 className="my-8 text-black-60">SAMPLES & COLLABORATORS CREDIT</h3>

      <div className="">
        <h6 className="mb-2 text-[0.75rem] text-black-40">Sample Information</h6>

        <p className="rounded-[0.25rem] bg-[#101112] p-4 text-caption/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore
        </p>
      </div>

      <div className="my-8">
        <h6 className="mb-2 text-[0.75rem] text-black-40">Co-Owners/Collaborators</h6>

        <aside className="flex flex-wrap gap-2">
          {['John Doe', 'Mark Smith', 'Adam George'].map((owner) => {
            return (
              <span
                key={owner}
                className="rounded-3xl bg-black-80 px-3 py-1 text-[0.75rem] text-black-40"
              >
                {owner}
              </span>
            );
          })}
        </aside>
      </div>

      <div className="my-8">
        <h6 className="mb-2 text-[0.75rem] text-black-40">Samples URL</h6>

        <aside className="flex flex-col gap-2">
          {['https://topeaniyikaye.webflow.io/', 'www.google.com', 'www.nairaland.com'].map(
            (url) => (
              <p key={url}>{url}</p>
            )
          )}
        </aside>
      </div>

      <h3 className="my-8 text-black-60">COVER ART</h3>

      <div className="">
        <h6 className="mb-2 text-[0.75rem] text-black-40">Cover image</h6>

        <span className="block rounded-md bg-black-80 px-6 py-4">filename.png</span>
      </div>

      <div className="mt-8">
        <h6 className="mb-1 text-[0.75rem] text-black-40">Cover art URL</h6>
        <p>https://topeaniyikaye.webflow.io/</p>
      </div>
    </section>
  );
};

export default AddRegistryPage;
