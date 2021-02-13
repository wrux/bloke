import { format, isValid, parseISO } from 'date-fns';
import React from 'react';

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <></>;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default Date;
