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
              <div class="d-flex flex-row align-items-center mt-4">
                <div class="invoice-icon-box">
                  <div class="rounded-orange">
                    <img src="/icons-box.png" alt="" />
                  </div>
                </div>
                <div class="invoice-headline pl-3">
                  <span>{{ dataOrder.invoice }}</span
                  ><img class="pl-3" src="/vector-copy.png" alt="" /> <br />
                  <p>
                    Invoice untuk {{ dataOrder.shipping.name }} (
                    {{ dataOrder.email }} )
                  </p>
                </div>
                <div class="description-contact ml-auto mr-3">
                  <span>Hubungi Penjual</span>
                </div>
                <div class="rounded-orange">
                  <img src="/icons-whatsapp.png" alt="" />
                </div>
              </div>
              <div class="banner-invoice">
                <img src="/banner-1.png" class="w-100" alt="" />
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
                <b-col cols="3" class="card-product mb-3">
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
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Kuantitas</span>
                        <span class="w-50 d-inline-block text-right">30</span>
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Berat</span>
                        <span class="w-50 d-inline-block text-right"
                          >800g/0,8kg</span
                        >
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Harga</span>
                        <span class="w-50 d-inline-block text-right"
                          >Rp. 105.000</span
                        >
                      </div>
                    </div>
                  </div> </b-col
                ><b-col cols="3" class="card-product mb-3">
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
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Kuantitas</span>
                        <span class="w-50 d-inline-block text-right">30</span>
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Berat</span>
                        <span class="w-50 d-inline-block text-right"
                          >800g/0,8kg</span
                        >
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Harga</span>
                        <span class="w-50 d-inline-block text-right"
                          >Rp. 105.000</span
                        >
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col cols="3" class="card-product mb-3">
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
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Kuantitas</span>
                        <span class="w-50 d-inline-block text-right">30</span>
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Berat</span>
                        <span class="w-50 d-inline-block text-right"
                          >800g/0,8kg</span
                        >
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Harga</span>
                        <span class="w-50 d-inline-block text-right"
                          >Rp. 105.000</span
                        >
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col cols="3" class="card-product mb-3">
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
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Kuantitas</span>
                        <span class="w-50 d-inline-block text-right">30</span>
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Berat</span>
                        <span class="w-50 d-inline-block text-right"
                          >800g/0,8kg</span
                        >
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Harga</span>
                        <span class="w-50 d-inline-block text-right"
                          >Rp. 105.000</span
                        >
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="mt-4 d-flex justify-content-end">
                <div class="d-flex payment justify-content-end">
                  <span class="pr-2">Pembayaran melalui BCA</span>
                  <img src="/bca.png" alt="" />
                </div>
              </b-row>
              <div class="payment-construct mt-4">
                <div class="d-flex flex-row align-items-center mt-2">
                  <div class="rounded-title">
                    <span>Pembayaranmu</span>
                  </div>
                  <div class="description-order ml-auto mr-3">
                    <span>Pembayaran terakhir</span>
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
                <b-row class="mt-3">
                  <b-col cols="3">
                    <div class="date-construct">
                      <img
                        src="/icons-date.png
"
                        alt=""
                      />
                      <span>19 July 2020 13:05</span>
                    </div>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Bank Transfer</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">SETTLEMENT</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Rp. 325.000</span>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col cols="3">
                    <div class="date-construct">
                      <img
                        src="/icons-date.png
"
                        alt=""
                      />
                      <span>19 July 2020 13:05</span>
                    </div>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Bank Transfer</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">SETTLEMENT</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Rp. 325.000</span>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col cols="3">
                    <div class="date-construct">
                      <img
                        src="/icons-date.png
"
                        alt=""
                      />
                      <span>19 July 2020 13:05</span>
                    </div>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Bank Transfer</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">SETTLEMENT</span>
                  </b-col>
                  <b-col cols="3">
                    <span class="payment-detail">Rp. 325.000</span>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="map-construct">
                <div class="d-flex flex-row align-items-center">
                  <div class="invoice-icon-box">
                    <div class="rounded-orange">
                      <img src="/icons-truck.png" alt="" />
                    </div>
                  </div>
                  <div class="invoice-headline pl-3">
                    <span>Pengiriman</span
                    ><img class="pl-3" src="/vector-copy.png" alt="" /> <br />
                    <p>{{ dataOrder.tracking_number }}</p>
                  </div>
                </div>
                <div class="map">
                  <img src="map.png" class="w-100" alt="" />
                </div>
                <div class="sender-construct">
                  <div class="sender-detail">
                    <b-row>
                      <b-col cols="3" class="sender-ico">
                        <img src="/sender-icon.jpg" alt="" />
                      </b-col>
                      <b-col cols="9">
                        <div class="sender-title">Pengirim</div>
                        <div class="sender-name">
                          {{ dataOrder.shipping_from.name }}
                        </div>
                        <div class="sender-address">
                          {{ dataOrder.shipping_from.address }}
                        </div>
                        <br />
                        <div class="sender-title">Penerima</div>
                        <div class="sender-name">
                          {{ dataOrder.shipping.name }}
                        </div>
                        <div class="sender-address">
                          {{ dataOrder.shipping.address }}
                        </div>
                      </b-col>
                    </b-row>
                    <b-row class="text-center">
                      <b-col cols="12 mt-4">
                        <img src="/jne.png" alt="" />
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
              <div class="detail-transaction mt-4">
                <div class="d-flex flex-row mb-3 align-items-center">
                  <div class="invoice-icon-box">
                    <div class="rounded-orange">
                      <img src="/icons-payment.png" alt="" />
                    </div>
                  </div>
                  <div class="transaction-headline pl-3">
                    <span>Konfirmasi Total</span
                    ><img class="pl-3" src="/vector-copy.png" alt="" /> <br />
                    <p>
                      <b>Rp. {{ dataOrder.grand_total }}</b>
                    </p>
                  </div>
                </div>
                <div class="w-100 d-flex detail-price mb-2">
                  <span class="w-50 d-inline-block">Sub Total</span>
                  <span class="w-50 d-inline-block text-right"
                    >Rp.{{ dataOrder.subtotal }}</span
                  >
                </div>
                <div class="w-100 d-flex detail-price mb-2">
                  <span class="w-50 d-inline-block">Fee</span>
                  <span class="w-50 d-inline-block text-right">Rp. 0</span>
                </div>
                <div class="w-100 d-flex detail-price mb-2">
                  <span class="w-50 d-inline-block">Pajak</span>
                  <span class="w-50 d-inline-block text-right">Rp. 0</span>
                </div>
                <div class="w-100 d-flex detail-price mb-2">
                  <span class="w-50 d-inline-block">Ongkir</span>
                  <span class="w-50 d-inline-block text-right"
                    >Rp. {{ dataOrder.shipping_total }}</span
                  >
                </div>
                <div class="w-100 d-flex detail-price mb-5">
                  <span class="w-50 d-inline-block">Total</span>
                  <span class="w-50 d-inline-block text-right"
                    >Rp. {{ dataOrder.grand_total }}</span
                  >
                </div>
                <div class="w-100 d-flex detail-price mb-5">
                  <span class="w-50 d-inline-block">Total</span>
                  <span class="w-50 d-inline-block text-right"
                    ><b>Rp. {{ dataOrder.grand_total }}</b></span
                  >
                </div>
                <div class="w-100 text-center border-r-10" @click="submit">
                  Bayar
                </div>
                <div class="text-left mt-2 fonts-2">
                  Membayar dengan CheckoutAja, Anda menyatakan bahwa Anda telah
                  menyetujui
                  <span class="note-org"> Syarat dan Ketentuan </span> yang
                  berlaku.
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = await params.slug
    return { slug }
  },
  data() {
    return {
      dataOrder: [],
    }
  },
  async fetch() {
    const params = await this.slug
    this.dataOrder = await fetch(
      `https://api.checkoutaja.com/v1/orders/find-by-token?identity=${params}`
    ).then((res) => res.json())
  },
  mounted() {
    const mapScript = document.createElement('script')
    mapScript.setAttribute(
      'src',
      'https://app.sandbox.midtrans.com/snap/snap.js'
    )
    mapScript.setAttribute('data-client-key', 'SB-Mid-client-LM2o4CHigqTKi2PA')
    document.head.appendChild(mapScript)
  },

  methods: {
    submit() {
      window.snap.pay('90b18777-582c-41cf-9f9e-23d6b50197f1', {
        // Optional
        onSuccess(result) {
          console.log('sukses', result)
        },
        // Optional
        onPending(result) {
          // SEND EMAIL PENDING
          console.log('pending', result)
        },
        // Optional
        onError(result) {
          console.log('error', result)
        },
      })
    },
  },
}
</script>
