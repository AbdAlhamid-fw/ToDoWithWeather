//import { useContext } from "react";
//import { useCookies } from "react-cookie";
import { useMutation, useQuery /*UseQueryOptions*/ } from "react-query";
// import { AuthContext } from "../../contexts/auth-context/auth-context";
import Translation from "../../../servises/Translations/index";

export const useTranslation = (
  id: number,
  config?: {
    deleteTranslationConfig?: any;
    updateTranslationConfig?: any;
    createTranslationConfig?: any;
    translationsDetailsConfig?: any;
    translationDataConfig?: any;
     getConfigsConfig?: any;
  }
) => {
  // const auth = useContext(AuthContext);
  // const [cookies] = useCookies();

  //   const translation = new TranslationService({
  //     Authorization: `bearer ${cookies.KEY_TOKEN}`,
  //   });

  //get all
  const translationData = useQuery(
    "getAllTranslations",
    () => Translation.getAllTranslations(),
    {
      ...config?.translationDataConfig,
      refetchOnWindowFocus: false,
    }
  );

  // get one
  const translationsDetails = useQuery(
    [`translationsDetails${id}`, id],
    () => Translation.getOneTranslation(id),
    {
      ...config?.translationsDetailsConfig,
      // refetchOnWindowFocus: false,
      enabled: id !== 0,
    }
  );

  //check For Duplication
  const checkForDuplication = useQuery(
    "checkForDuplication",
    () => Translation.checkForDuplication
  );

  //create Translation
  const createTranslation = useMutation(Translation.createTranslation, {
    ...config?.createTranslationConfig,
    refetchOnWindowFocus: false,
  });

  //update transltion
  const updateTranslation = useMutation(Translation.updateTranslation, {
    ...config?.updateTranslationConfig,
  });

  // delete Translation
  const deleteTranslation = useMutation(Translation.deleteTranslation, {
    ...config?.deleteTranslationConfig,
    refetchOnWindowFocus: false,
  });

  // get all configs
  const getConfigs = useQuery(
    "getConfigs",
    () => Translation.getConfigs(),
    {
      ...config?.getConfigsConfig,
      refetchOnWindowFocus: false,
    }
  );

  return {
    translationData,
    translationsDetails,
    createTranslation,
    updateTranslation,
    deleteTranslation,
    checkForDuplication,
    getConfigs,
  };
};
