import { Field, useFormikContext } from 'formik';

export type Props = {
  label?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  onChange?: any;
  className?: string;
  isCheck?: boolean;
  onChoose?: any;
  isRequire?: boolean;
};

export const Checkbox = ({ name, onChange, isCheck, label }: Props) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (e: any) => {
    isCheck && setFieldValue(name || 'checkbox', true);
    onChange && onChange(e);
  };
  return (
    <label>
      <Field type="checkbox" name={name || 'checkbox'} className="accent-gray-600" />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default Checkbox;
