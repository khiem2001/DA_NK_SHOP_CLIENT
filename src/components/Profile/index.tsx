import React, { use, useEffect, useState } from 'react';
import ImageUploader from '../Upload';
import useUserStore, { UserStore } from '@/store/useUserStore';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notification from '../Notification';
import useSendEmail from './services/hook/useSendMail';
import useVerifyEmail from './services/hook/useVerifyEmail';
import { useGetMe } from '@/graphql/apis/useGetMe';
import useUpdateProfile from './services/hook/useUpdateProfile';
import { Gender } from '@/graphql/generated';
import { format } from 'date-fns';

export const ImageAvatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
`;
const Profile = () => {
  const { user } = useGetMe();
  const [imageUrl, setImageUrl] = useState<any>();
  const [imageId, setImageId] = useState<any>('');
  const [email, setEmail] = useState('');
  const [formEmail, setFormEmail] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState('');
  const [formVerifyEmail, setFormVerifyEmail] = useState(false);

  const { handleSendEmail, sessionId, isLoadingSendMail } = useSendEmail();
  const { handleVerifyEmail, isLoadingVerify } = useVerifyEmail();
  const { handleUpdateProfile, isLoadingUpdate } = useUpdateProfile();

  useEffect(() => {
    if (sessionId) {
      setFormEmail(false);
      setFormVerifyEmail(true);
    }
  }, [sessionId]);

  useEffect(() => {
    if (user.email) {
      setFormVerifyEmail(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.avatarId?.url) {
      setImageUrl(`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${user?.avatarId?.url}`);
      setImageId(user.avatarId._id);
    }
  }, [user?.avatarId]);

  const handleImageIdChange = (url: string) => {
    setImageId(url);
  };
  const initialValues = {
    address: user?.address,
    fullName: user?.fullName,
    birthday: user?.birthday ? format(new Date(user.birthday), 'yyyy-MM-dd') : '',
    gender: user?.gender
  };

  const handleVerifyMail = () => {
    handleVerifyEmail({
      otp: verifyEmail,
      sessionId
    });
  };

  const handleFormSubmit = (values: any) => {
    if (imageId === '') {
      Notification.Info('Vui lòng cập nhật ảnh đại diện!');
    } else {
      handleUpdateProfile({ ...values, avatarId: imageId });
    }
  };

  return (
    <>
      {user ? (
        <div className="p-52 bg-white">
          <div className="flex items-center">
            <div className="w-1/12">
              <ImageUploader onImageIdChange={handleImageIdChange} imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </div>
            <div className="font-bold text-xl ml-6 flex flex-col">
              <span className="p-2">{user.phoneNumber}</span>
              <span className="p-2">
                {user.email ? (
                  user.email
                ) : (
                  <button
                    className="bg-orange-700 font- text-white text-xs p-2 font-thin"
                    onClick={() => {
                      setFormEmail(!formEmail);
                      setFormVerifyEmail(false);
                    }}
                  >
                    Cập Nhật Email
                  </button>
                )}
              </span>
            </div>
            {formEmail && (
              <div className="ml-10 p-5 border-l-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Nhập email của bạn"
                  onChange={e => setEmail(e.target.value)}
                  className="border p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                ></input>
                <button
                  onClick={() => {
                    if (email !== '') {
                      handleSendEmail({ email });
                    } else {
                      Notification.Info('Vui long nhap email!');
                    }
                  }}
                  className="p-2 ml-2 bg-slate-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  {isLoadingSendMail ? 'Đang Gửi...' : 'Gửi Mã'}
                </button>
              </div>
            )}
            {formVerifyEmail && (
              <div className="ml-10 p-5 border-l-2">
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Nhập mã xác thực..."
                  onChange={e => setVerifyEmail(e.target.value)}
                  className="border p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                ></input>
                <button
                  onClick={handleVerifyMail}
                  className="p-2 ml-2 bg-slate-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  {isLoadingVerify ? 'Đang Xác Nhận...' : 'Xác Nhận'}
                </button>
              </div>
            )}
          </div>
          <Formik initialValues={initialValues} onSubmit={handleFormSubmit} enableReinitialize={true}>
            <Form className="mt-6">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value={Gender.Unknown}>Không Xác Định</option>
                  <option value={Gender.Male}>Nam</option>
                  <option value={Gender.Female}>Nữ</option>
                </Field>
              </div>

              <div className="mb-4">
                <label htmlFor="birthday" className="block text-gray-700 font-bold mb-2">
                  Birthday
                </label>
                <Field
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                  Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
                {isLoadingUpdate ? 'Đang Cập Nhật...' : 'Cập nhật Tài Khoản'}
              </button>
            </Form>
          </Formik>
        </div>
      ) : (
        <div className="p-52 text-xl text-red-600"> Vui lòng đăng nhập tài khoản...</div>
      )}
    </>
  );
};

export default Profile;
