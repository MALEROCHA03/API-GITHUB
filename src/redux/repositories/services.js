import axiosInstance from "../../helpers/axios";

export const getAllRepositories = ({
  userName = "MALEROCHA03",
  page = 1,
  type = "owner",
  sort = "full_name",
}) => {
  const apiURL = `/users/${userName}/repos`;
  return axiosInstance
    .get(apiURL, {
      params: {
        page,
        type,
        sort,
      },
    })
    .catch((error) => {
      throw error;
    });
};
