export default function UseWater(waterInMl: number) {

    const waterInL = waterInMl/1000;    

    return waterInL.toFixed(1);

}

export function UseWaterTimer(waterQnt: number) {

    const WaterPerTimer = waterQnt/10

    return WaterPerTimer.toFixed(0);
    
}