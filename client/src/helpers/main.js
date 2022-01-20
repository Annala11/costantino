import { useSelector } from "react-redux";

export function getServiceRootCategoryId(serviceId){
  //получает корневую категорию для услуги по ее id
  const services = useSelector(state => state.services.services);
  const categories = useSelector(state => state.categories.categories);
   const service = services?.find((el)=> el.id === Number(serviceId));
    if(!service){
    return false;
  }
  const category = categories.find((el)=> el.id === service.category_id);
  return category?.parent_id ? category?.parent_id : category?.id;
}
