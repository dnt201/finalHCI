import { Gift } from "@icons";

export interface iNotifyItem {
    title:string,
    des:string,
    Svg: React.ElementType<SVGElement>,
}

export const listNotify: iNotifyItem[] = [{
    title:'30% Special Discount!',
    des: 'Special promotion only valid today',
    Svg: Gift,
}]