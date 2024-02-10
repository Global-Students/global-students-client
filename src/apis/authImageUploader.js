import axios from 'axios';

export default async function uploadAuthImage(file) {
  const formData = new FormData();

  formData.append('file', file);
  formData.append(
    'upload_preset',
    process.env.REACT_APP_CLOUDINARY_AUTH_PRESET,
  );

  return axios
    .post(process.env.REACT_APP_CLOUDINARY_URL, formData)
    .then(
      ({ version, public_id: publicId }) =>
        `https://res.cloudinary.com/dl3tbdrcc/image/upload/c_scale,w_884/v${version}/${publicId}.png`,
    );
}
