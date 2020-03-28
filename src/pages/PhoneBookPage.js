import React from 'react';
import InputForm from '../components/InputForm';
import Contacts from '../components/Contacts';
import FilterForm from '../components/FilterForm';

const PhoneBookPage = () => {
  return (
    <>
      <InputForm />
      <FilterForm />
      <Contacts />
    </>
  );
};

export default PhoneBookPage;
