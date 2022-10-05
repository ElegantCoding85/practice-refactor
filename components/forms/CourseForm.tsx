import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import TextInput from 'components/forms/TextInput';
import TextAreaInput from 'components/forms/TextAreaInput';
import SubmitInput from 'components/forms/SubmitInput';
import { Course } from "@prisma/client";

export type Inputs = {
  name: string;
  description: string;
};

type Props = {
  course?: Course;
  onSubmit: SubmitHandler<Inputs>;
  isLoading: boolean;
}

const CourseForm = ({ course, onSubmit, isLoading }: Props) => {
  const methods = useForm<Inputs>({ defaultValues: { name: course?.name, description: course?.description } });

  return (
    <FormProvider {...methods}>
      <form className='flex flex-col max-w-lg' onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput label='Name' name='name' options={{ required: true }} />
        <TextAreaInput label='Description' name='description' options={{ required: true }} />
        <SubmitInput value={`${course ? 'Update' : 'Create'} course`} isLoading={isLoading} />
      </form>
    </FormProvider>
  )
}

export default CourseForm;