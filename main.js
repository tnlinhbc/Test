function kiemTra() {
    let hoTen = document.frmDangKy.hoTen.value;
    let ngay = document.frmDangKy.Ngay.value;
    let thang = document.frmDangKy.Thang.value;
    let nam = document.frmDangKy.nam.value;
    let cccd = document.frmDangKy.cccd.value;
    let tel = document.frmDangKy.tel.value;
    let email = document.frmDangKy.email.value;
    let diaChi = document.frmDangKy.diaChi.value;
    let tenDangNhap = document.frmTaiKhoan.tenDangNhap.value;
    let matKhau = document.frmTaiKhoan.matKhau.value;
    let nhapLaiMatKhau = document.frmTaiKhoan.nhapLaiMatKhau.value;
    var tesEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (hoTen == '') {
        alert('Nhập họ tên')
        document.frmDangKy.hoTen.focus();
        return false;
    }
    if (ngay == 'ngay') {
        alert('Chọn ngày sinh')
        return false;
    }
    if (thang == 'thang') {
        alert('Chọn tháng sinh')
        return false;
    }
    if (nam == '') {
        alert('Nhập năm sinh')
        document.frmDangKy.nam.focus();
        return false;
    }
    if (cccd == '') {
        alert('Nhập số căn cước công dân')
        document.frmDangKy.cccd.focus();
        return false;
    }
    else if (cccd.length < 12) {
        alert('Số căn cước công dân không đúng')
        document.frmDangKy.cccd.focus();
        return false;
    }
    else if (cccd.length > 12) {
        alert('Số căn cước công dân không đúng')
        document.frmDangKy.cccd.focus();
        return false;
    }
    if (tel == '') {
        alert('Nhập số điện thoại')
        document.frmDangKy.tel.focus();
        return false;
    }
    else if (tel.length < 10) {
        alert('Số điện thoại không đúng')
        document.frmDangKy.tel.focus();
        return false;
    }
    else if (tel.length > 10) {
        alert('Số điện thoại không đúng')
        document.frmDangKy.tel.focus();
        return false;
    }
    if (email == '') {
        alert('Nhập số Email')
        document.frmDangKy.email.focus();
        return false;
    }
    else if (!tesEmail.test(email)) {
        alert('Email không đúng')
        document.frmDangKy.email.focus();
        return false;
    }
    if (diaChi == '') {
        alert('Nhập địa chỉ')
        document.frmDangKy.diaChi.focus();
        return false;
    }
    if (tenDangNhap == '') {
        alert('Nhập số tên đang nhập')
        document.frmTaiKhoan.tenDangNhap.focus();
        return false;
    }
    if (matKhau == '') {
        alert('Nhập mật khẩu')
        document.frmTaiKhoan.matKhau.focus();
        return false;
    }
    if (matKhau != nhapLaiMatKhau) {
        alert('Mật khẩu đăng nhập và mật lkhẩu hập lại không giống nhau');
        document.frmTaiKhoan.nhapLaiMatKhau.focus();
        return false;
    }
    alert('Chúc mừng ! đã đăng ký thành công');
    var thongTin = '<h1>THÔNG TIN ĐĂNG KÝ</h1>' +
        '<p><b>Họ tên </b>' + hoTen + '</p>' +
        '<p><b>Sinh </b>' + ngay + ' ' + thang + ' Năm ' + nam + '</p>' +
        '<p><b>Số căn cước công dân </b>' + cccd + '</p>' +
        '<p><b>Số điện thoại </b>' + tel + '</p>' +
        '<p><b>Email </b>' + email + '</p>' +
        '<p><b>Địa chỉ </b>' + diaChi + '</p>' +
        '<p><b>Tên đăng nhập </b>' + '<span>' + tenDangNhap + '</span>' + '</p>' +
        '<p><b>Mật khẩu </b>' + '<span>' + matKhau + '</span>' + '</p>';
    document.getElementById('hienThongTin').innerHTML = thongTin;

}
function huy() {
    location.reload(true);
}