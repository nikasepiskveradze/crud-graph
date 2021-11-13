import Yup from '../configs/yup';

export const createNewsSchema = Yup.object({
  title: Yup.string().trim().required(),
  body: Yup.string().trim().required(),
});
