import toast from 'react-hot-toast';

export default function registerErrors(error) {
  if (error) {
    const emailErr = error?.data?.errors?.email?.message;
    if (emailErr) {
      toast.error(emailErr);
    }

    const passwordErr = error?.data?.errors?.password?.message;
    if (passwordErr) {
      toast.error(passwordErr);
    }

    // name: "MongoError" code: 11000
    const errCode = error?.data?.code;
    if (errCode === 11000) {
      toast.error(`${error.data.keyValue.email} is already registered!`);
    }

    // console.log('error name:', error?.data?.errors?.name?.message);
    // console.log('error email:', error?.data?.errors?.email?.message);
    // console.log('error password:', error?.data?.errors?.password?.message);
    // console.log('error MongoDB 11000:', error?.data?.code);
  }
}
