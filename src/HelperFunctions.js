export const emails = [
  'cmsec@tn.gov.in',
  'cmcell@tn.gov.in',
  'mlakolathur@tn.gov.in',
  'kanimozhi@sansad.nic.in',
  'cs@tn.gov.in',
  'regrgenl@nic.in',
  'hcourt@tn.nic.in',
  'collrtut@nic.in',
  'dgp@tn.gov.in',
  'igp.south@tncctns.gov.in',
  'shrc@tn.nic.in',
  'sec.shrc@tn.gov.in',
  'sp.tut@tncctns.gov.in',
  'adsp.crthoothukudi@tncctns.gov.in',
  'adsp.pew_thoothukudi@tncctns.gov.in',
];
export const textWithoutBreak = `
I am emailing today to demand accountability for the custodial torture and subsequent deaths of Jayaraj and Bennix Emmanuel in Sattankulam, Thoothukudi by officers Mr. Balakrishnan and Mr. Pauldurai under the Section 10-19 of Tamil Nadu Police (Reforms) Act, 2013.

I demand an unbiased investigation into their alleged torture and deaths and that the officers involved be terminated, arrested and charged for murder. I also demand for justice for the family of the two men who have lost two of their innocent family members because of the brutality of the officers involved.

Suspension and transfer of the officers to a different police department simply isn’t enough. The officers involved must face consequences for their actions in order to deter law enforcement from the gross misuse of power in the future. Mr. Balakrishnan and Mr. Pauldurai must be charged for the brutal assault of the two men and the sexual misconduct committed against Bennix in custody.

In addition, I demand we provide essential human rights training to all police officers and for the constitution of the Police Complaints Authority in Tamil Nadu so as to provide speedy and swift justice to victims of police brutality.
`;
export const preText = `
I am emailing today to demand accountability for the custodial torture and subsequent deaths of Jayaraj and Bennix Emmanuel in Sattankulam, Thoothukudi by officers Mr. Balakrishnan and Mr. Pauldurai under the Section 10-19 of Tamil Nadu Police (Reforms) Act, 2013.
<br>
I demand an unbiased investigation into their alleged torture and deaths and that the officers involved be terminated, arrested and charged for murder. I also demand for justice for the family of the two men who have lost two of their innocent family members because of the brutality of the officers involved.
<br>
Suspension and transfer of the officers to a different police department simply isn’t enough. The officers involved must face consequences for their actions in order to deter law enforcement from the gross misuse of power in the future.
<br>
Mr. Balakrishnan and Mr. Pauldurai must be charged for the brutal assault of the two men and the sexual misconduct committed against Bennix in custody.
<br>
In addition, I demand we provide essential human rights training to all police officers and for the constitution of the Police Complaints Authority in Tamil Nadu so as to provide speedy and swift justice to victims of police brutality.
<br>
`;
export const preSubject =
  'Justice for Sattankulam shopkeepers Jayaraj and Bennix Emmanuel';
export const generateEmail = (name, presentLoc, presentPos, extra) => {
  const text = `Dear Sir/Madam,<br>
  My name is ${name} and I am a resident of ${presentLoc}.<br> ${
    presentPos ? `I work as a/an ${presentPos}.<br>` : ''
  }${extra ? `${extra}<br>` : ''}`;
  return text;
};
export const generateEmailWithoutBreaks = (
  name,
  presentLoc,
  presentPos,
  extra
) => {
  const text = `Dear Sir/Madam, ${name !== '' ? `My name is ${name}` : ''} ${
    presentLoc !== '' ? `and I am a resident of ${presentLoc}.` : ''
  } ${presentPos ? `I work as a/an ${presentPos}.` : ''} ${
    extra
      ? `

  ${extra}`
      : ''
  }
 `;
  return text;
};
export const generateFooter = (name, presentLoc, presentPos) => {
  const text = `Hoping you take immediate action,<br>
  ${name}<br>${presentPos ? `${presentPos}<br>` : ''}${presentLoc}<br><br>`;
  return text;
};
export const generateFooterWithoutBreaks = (name, presentLoc, presentPos) => {
  const text = `Hoping you take immediate action,${
    name !== ''
      ? ` 
  ${name}.`
      : ''
  }${
    presentPos
      ? `
  ${presentPos}`
      : ''
  }${
    presentLoc
      ? `
  ${presentLoc}`
      : ''
  } `;
  return text;
};
