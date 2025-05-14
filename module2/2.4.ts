{
    // 

    // interface - generic

    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string;
            model: string;
            releseYear: number
        }
        smartWatch: T;
        bike?: X
    }

    type poorWatch = {
        brand: string,
        model: string,
        display: string
    }


    const poorDeveloper: Developer<poorWatch> = {
        name: "Sanjit",
        computer: {
            brand: "Asus",
            model: "12df",
            releseYear: 2022
        },
        smartWatch: {
            brand: "Emilib",
            model: "23sdf",
            display: "OLED"
        }
    }

    interface richWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string,
        engineCapacity: string
    }

    const richDeveloper: Developer<richWatch, YamahaBike> = {
        name: "Rich Dev",
        computer: {
            brand: "Apple",
            model: "m15",
            releseYear: 2023
        },
        smartWatch: {
            brand: "Apple watch",
            model: "23sdf",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "Yemaha",
            engineCapacity: "150cc"
        }
    }






    //
}