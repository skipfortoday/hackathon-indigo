<template>
  <div class="w-100 h-100">
    <div class="pos-relative">
      <div class="pos-absolute">
        <b-container class="my-4">
          <b-row>
            <b-col cols="8">
              <div class="notification d-flex flex-row align-items-center">
                <div class="notification-icon-truck">
                  <img src="/icons-truck.png" alt="" />
                </div>
                <div class="notification-text">
                  <span>Pembelian dikirim pada 20 Juli 2020 12:10</span>
                </div>
                <div class="close-ico ml-auto">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div class="invoice d-flex flex-row align-items-center mt-4">
                <div class="invoice-icon-box">
                  <div class="rounded-orange">
                    <img src="/icons-box.png" alt="" />
                  </div>
                </div>
                <div class="invoice-headline pl-3">
                  <span>CA/08-21/00053</span
                  ><img class="pl-3" src="/vector-copy.png" alt="" /> <br />
                  <p>Invoice untuk Rizqi O (rizqi@example.com)</p>
                </div>
                <div class="description-contact ml-auto mr-3">
                  <span>Hubungi Penjual</span>
                </div>
                <div class="rounded-orange">
                  <img src="/icons-whatsapp.png" alt="" />
                </div>
              </div>
              <div class="banner-invoice">
                <img src="/banner.png" class="w-100" alt="" />
              </div>
              <b-row class="mt-4">
                <b-col cols="3">
                  <div class="detail-status text-center">
                    Menunggu Pembayaran
                  </div>
                </b-col>
                <b-col cols="3">
                  <div class="detail-status text-center">
                    Pembayaran Berhasil
                  </div>
                </b-col>
                <b-col cols="3">
                  <div class="detail-status text-center">Dikirim</div>
                </b-col>
                <b-col cols="3">
                  <div class="detail-status-accepted text-center">Diterima</div>
                </b-col>
              </b-row>
              <div class="head-order d-flex flex-row align-items-center mt-5">
                <div class="rounded-title">
                  <span>Pembelianmu</span>
                </div>
                <div class="description-order ml-auto mr-3">
                  <span>Waktu pembelian</span>
                </div>
                <div class="rounded-purple">
                  <img
                    src="/icons-date.png
"
                    alt=""
                  />
                  19 July 2020 13:05
                </div>
              </div>
              <b-row class="mt-4">
                <b-col cols="3" class="card-product">
                  <div class="image-product">
                    <img src="/img-1.png" alt="" />
                  </div>
                  <div class="card-detail">
                    <div class="card-detail-title">
                      <div class="text-center mt-3">
                        <span class="title-product">Kopi Arabica</span>
                      </div>
                      <div class="text-center star-construct">
                        <img src="star.png" class="star" alt="" />
                      </div>
                    </div>
                    <div class="card-detail-quality"></div>
                    <div class="card-detail-weight"></div>
                    <div class="card-detail-quantity"></div>
                  </div>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="4">
              <div>asndkasndka</div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
