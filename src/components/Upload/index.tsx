import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';
import styled from 'styled-components';

const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: 100%;
  border-radius: 100%;
`;

const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  return isJpgOrPng;
};

const ImageUploader = ({ onImageIdChange, imageUrl, setImageUrl }: any) => {
  const [loading, setLoading] = useState(false);

  const handleChange = async (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      try {
        const formData = new FormData();
        formData.append('file', info.file.originFileObj);
        const response = await axios.post(process.env.NEXT_PUBLIC_MEDIA_ENDPOINT_UPLOAD || '', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        // Lấy URL ảnh đã tải lên từ phản hồi của API
        const image = process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + response.data.url;
        onImageIdChange(response.data._id);
        // Đặt URL ảnh đã tải lên để hiển thị
        setImageUrl(image);
        setLoading(false);
      } catch (error) {
        console.error('Upload error:', error);
        setLoading(false);
        message.error('Failed to upload image');
      }
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined className="text-black" /> : <PlusOutlined className="text-black" />}
      <div style={{ marginTop: 8, borderRadius: '5px', fontWeight: 'bold', color: 'black' }}>Avatar</div>
    </div>
  );

  return (
    <>
      <Upload
        name="image"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <ImageProduct src={imageUrl} alt="image" /> : uploadButton}
      </Upload>
    </>
  );
};

export default ImageUploader;
