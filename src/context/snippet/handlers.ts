import { AxiosInstance } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { HTTPStatusCodes, ResponsePayload } from '../../types/request.types';
import { Snippet, SnippetAuthor, SnippetFormValues } from '../../types/snippet.types';
import { User } from '../../types/user.types';
import { setErrorToast } from '../../utils/toasts';
import { create, edit, getPaginated, GetPaginatedPayload, loadOwnSnippets } from './api';

export const handleGetOwnSnippets = async (
  axiosInstance: AxiosInstance,
  onSuccess: Dispatch<SetStateAction<Snippet[]>>,
  user: User
): Promise<boolean> => {
  const response = await loadOwnSnippets(axiosInstance);

  if (response.status === HTTPStatusCodes.OK) {
    const { codes } = (response as ResponsePayload<GetPaginatedPayload>).data;

    const codesWithAuthor = codes.map((code) => ({
      ...code,
      author: user as SnippetAuthor // TODO: Change to component handler
    }));

    onSuccess(codesWithAuthor);
    return true;
  }

  setErrorToast("There's been an error loading your snippets! 💀");
  return false;
};

export const handleGetSnippets = async (
  axiosInstance: AxiosInstance,
  page: number,
  updateSnippets: (newSnippets: Snippet[]) => void,
  updatePage: (page: number | null) => void
) => {
  const response = await getPaginated(axiosInstance, { page });

  if (response.status === HTTPStatusCodes.OK) {
    const { codes, nextPage } = (response as ResponsePayload<GetPaginatedPayload>).data;
    updateSnippets(codes);
    updatePage(nextPage || null);
    return true;
  }

  setErrorToast("There's been an error loading the snippets! 💀");
  return false;
};

export const handleEditSnippet = async (axiosInstance: AxiosInstance, values: Snippet): Promise<boolean> => {
  const response = await edit(axiosInstance, values);

  if (response.status === HTTPStatusCodes.OK) {
    return true;
  }

  setErrorToast("There's been an error editing the snippet! 💀");
  return false;
};

export const handleCreateSnippet = async (
  axiosInstance: AxiosInstance,
  values: SnippetFormValues
): Promise<boolean> => {
  const response = await create(axiosInstance, values);

  if (response.status === HTTPStatusCodes.CREATED) {
    return true;
  }

  setErrorToast("There's been an error creating the snippet! 💀");
  return false;
};
