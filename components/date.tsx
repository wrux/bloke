import React from 'react';
import { isValid, parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <span>No date</span>;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default Date;
