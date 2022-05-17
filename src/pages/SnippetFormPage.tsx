import { useCallback, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import SnippetForm, { SnippetParams } from '../components/SnippetForm';
import { SnippetContext } from '../context/snippet';
import { Snippet } from '../types/snippet.types';
import { CommonLayout } from '../ui/layouts/CommonLayout';
import { setErrorToast, setSuccessToast } from '../utils/toasts';

export type Props = {
  isEdit?: boolean;
};

const SnippetFormPage = ({ isEdit = false }: Props) => {
  const navigate = useNavigate();
  const { createSnippet, editSnippet, findOwnSnippetById } = useContext(SnippetContext);
  const { id: editSnippetId } = useParams();
  const defaultSnippet = findOwnSnippetById(editSnippetId as string);

  const submitNewSnippet = useCallback(async (values: SnippetParams) => {
    createSnippet(values).then((status: boolean) => {
      if (status) {
        setSuccessToast('Snippet successfuly created');
        navigate('/snippets');
      } else {
        setErrorToast('Error creating the snippet');
      }
    });
  }, []);

  const submitsnippetToEdit = useCallback(async (values: SnippetParams) => {
    editSnippet({
      ...defaultSnippet,
      ...values
    } as Snippet).then((status: boolean) => {
      if (status) {
        setSuccessToast('Snippet successfuly edited');
        navigate('/snippets?mode=owner');
      } else {
        setErrorToast('Error editing the snippet');
      }
    });
  }, []);

  if (isEdit && !defaultSnippet) {
    return <Navigate to="/" />;
  }

  return (
    <CommonLayout>
      <h1>{isEdit ? 'Edit your snippet' : 'Create a new snippet'}</h1>

      <SnippetForm
        isEdit={Boolean(editSnippetId && isEdit)}
        onSubmit={isEdit ? submitsnippetToEdit : submitNewSnippet}
        initialValues={defaultSnippet}
      />
    </CommonLayout>
  );
};

export default SnippetFormPage;
