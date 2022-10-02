import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  padding: 15px;
  border: 2px solid white;
  width: fit-content;
  line-height: 2rem;
`;

export const AddContactBtn = styled.button`
  margin-left: 15px;
  border: 1px solid #262626;
  border-radius: 3px;
  padding: 1px 6px;
  &:hover {
    background-color: #678;
    color: #fff;
  }
  &:active {
    background-color: #456;
    color: #fff;
  }
`;
