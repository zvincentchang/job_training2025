export const INCREASE='INCREASE';
export const DECREASE='DECREASE';
export function incActionGenerator(){
    return {
        type:INCREASE,
        preload:'increase the current value'
    }
}
export function decActionGenerator(){
    return {
        type:DECREASE,
        preload:'decrease the current value'
    }
}