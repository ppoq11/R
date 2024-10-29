function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "يرجى ملء جميع الحقول المطلوبة.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "تم إرسال رسالتك بنجاح!";
    formMessage.style.color = "green";

    // يمكنك إضافة كود لإرسال البيانات إلى خادم هنا

    return false; // لمنع إعادة تحميل الصفحة
}
