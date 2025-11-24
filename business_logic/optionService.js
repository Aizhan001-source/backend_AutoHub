import * as OptionsModel from "../data_acces/optionRepository.js";

export async function createOptionLogic(data) {
const exists = await OptionsModel.getOptionByName(data.name);
if (exists) throw new Error("Опция уже существует");
return await OptionsModel.createOption(data);
}

export async function getOption(id) {
const option = await OptionsModel.getOptionById(id);
if (!option) throw new Error("Опция не найдена");
return option;
}
s