// тут мы храним сообщения об ошибках, например если не нашли пиццу по названию в заказе или заказ в пиццерии
// использовать сообщения отсюда для обработки ошибок при поиске
export enum ERROR_MESSAGES {
    DIDNTFIND = "didn't find",
    DONOTEXIST = "do not exist",
    DELETEDFROMORDER = "deleted from order",
    DELETED = "deleted",
  }