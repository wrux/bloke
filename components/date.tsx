import React from 'react';

type Props = {
  dateString: string;
};

const DateComponent: React.FC<Props> = ({ dateString }) => {
  const date = new Date(dateString);
  return <time dateTime={date.toISOString()}>{date.toDateString()}</time>;
};

export default DateComponent;
