import React from 'react';
import { format } from 'date-fns';

const FormatDateTime = ({ dateString }) => {
  if (!dateString) return null;

  const formattedDate = format(new Date(dateString), 'dd-MM-yyyy');
  return <span>{formattedDate}</span>;
};

export default FormatDateTime;
