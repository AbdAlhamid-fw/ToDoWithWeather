import ApiService from "../api-services";
import ITranslation from "./interfaces/translation";

class TranslationService {
  private Api: ApiService;
  constructor() {
    this.Api = new ApiService();
  }

  getAllTranslations = async () => {
    let res = this.Api.getAll("translations");
    return res;
  };

  getOneTranslation = async (id: number) => {
    console.log("id in services" ,id);
    
    let res = this.Api.getOne("translation", { id });
    return res;
  };

  deleteTranslation = async (id: number) => {
    let res = this.Api.delete("remove-translation", id);
    return res;
  };

  createTranslation = async (data: ITranslation) => {
    let res = this.Api.add("add-translation", data);
    return res;
  };

  // update transltion 
  updateTranslation = async (data: ITranslation) => {
    let res = this.Api.add("update-translation", data);
    return res;
  };

  // /get-configs
  getConfigs = async () => {
    let res = this.Api.getAll("get-configs");
    return res;
  };

  //check-for-duplication
  checkForDuplication = async (keyword: string) => {
    let res = this.Api.getOne("check-for-duplication", { keyword: keyword });
    return res;
  };
}
const translationService = new TranslationService();

export default translationService;
