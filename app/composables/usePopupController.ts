export const usePopupController = () => {
    const isOpenLogin = useState<boolean>('isOpenLogin', () => false)
    const isOpenReg = useState<boolean>('isOpenReg', () => false)
    const isMenuOpen = useState<boolean>('isMenuOpen', () => false)


    function toggleLoginOpen(): void {
        isOpenLogin.value = !isOpenLogin.value;
        isMenuOpen.value = false;
        document.body.classList.toggle('scroll-lock')
    }

    function toggleRegOpen(): void  {
        isOpenReg.value = !isOpenReg.value;
        isMenuOpen.value = false;
        document.body.classList.toggle('scroll-lock')
    }

    function toggleSwitch(): void {
        isOpenLogin.value = !isOpenLogin.value;
        isOpenReg.value = !isOpenReg.value;
    }

    function closePopup(): void {
        isOpenLogin.value = false;
        isOpenReg.value = false;
        isMenuOpen.value = false;
        document.body.classList.remove('scroll-lock')
    }

    function toggleMenu(): void {
        isMenuOpen.value = !isMenuOpen.value;
        document.body.classList.toggle('scroll-lock')
    }

    return {
        toggleLoginOpen,
        isOpenLogin,
        toggleRegOpen,
        isOpenReg,
        toggleSwitch,
        closePopup,
        isMenuOpen,
        toggleMenu,
    }
}