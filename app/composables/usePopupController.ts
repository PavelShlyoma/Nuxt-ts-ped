export const usePopupController = () => {
    const isOpenLogin = useState<boolean>('isOpenLogin', () => false)
    const isOpenReg = useState<boolean>('isOpenReg', () => false)


    function toggleLoginOpen() {
        isOpenLogin.value = !isOpenLogin.value;
    }

    function toggleRegOpen() {
        isOpenReg.value = !isOpenReg.value;
    }

    function toggleSwitch() {
        isOpenLogin.value = !isOpenLogin.value;
        isOpenReg.value = !isOpenReg.value;
    }

    return {
        toggleLoginOpen,
        isOpenLogin,
        toggleRegOpen,
        isOpenReg,
        toggleSwitch
    }
}