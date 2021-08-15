<template>
  <div class="w-100 h-100">
    <div class="pos-relative">
      <div class="pos-absolute">
        <b-container class="my-4">
          <b-alert v-if="copyMessage !== ''" variant="success" show>
            <i class="fas fa-copy fa-lg"></i>
            {{ copyMessage }}</b-alert
          >
          <b-row>
            <b-col cols="12" md="8">
              <div
                v-if="dataOrder.status === 'PEMBAYARAN BERHASIL'"
                class="
                  notification-success-payment
                  d-flex
                  flex-row
                  align-items-center
                "
              >
                <div class="notification-icon-truck">
                  <img src="/icons8-invoice-44.png" alt="" />
                </div>
                <div class="notification-text">
                  <span
                    >Pembelian {{ dataOrder.status }} pada
                    {{ $moment(dataOrder.updated_at).format('llll') }}</span
                  >
                </div>
              </div>
              <div
                v-if="dataOrder.status === 'MENUNGGU PEMBAYARAN'"
                class="notification d-flex flex-row align-items-center"
              >
                <div class="notification-icon-truck">
                  <img src="/icons8-alarm-48.png" alt="" />
                </div>
                <div class="notification-text">
                  <span
                    >Pembelian {{ dataOrder.status }} pada
                    {{ $moment(dataOrder.updated_at).format('llll') }}</span
                  >
                </div>
              </div>
              <div
                v-if="
                  ['PEMBAYARAN DITOLAK', 'KADALUARSA', 'DIBATALKAN'].includes(
                    dataOrder.status
                  )
                "
                class="notification-danger d-flex flex-row align-items-center"
              >
                <div class="notification-icon-truck">
                  <img src="/icons8-cancel-44.png" alt="" />
                </div>
                <div class="notification-text">
                  <span
                    >Pembelian {{ dataOrder.status }} pada
                    {{ $moment(dataOrder.updated_at).format('llll') }}</span
                  >
                </div>
              </div>

              <div
                v-if="['DIKIRIM'].includes(dataOrder.status)"
                class="
                  notification-success-delivery
                  d-flex
                  flex-row
                  align-items-center
                "
              >
                <div class="notification-icon-truck">
                  <img src="/icons-truck.png" alt="" />
                </div>
                <div class="notification-text">
                  <span
                    >Pembelian {{ dataOrder.status }} pada
                    {{ $moment(dataOrder.updated_at).format('llll') }}</span
                  >
                </div>
              </div>

              <div
                v-if="['DITERIMA'].includes(dataOrder.status)"
                class="
                  notification-success-delivery
                  d-flex
                  flex-row
                  align-items-center
                "
              >
                <div class="notification-icon-truck">
                  <img src="/icons8-box-44.png" alt="" />
                </div>
                <div class="notification-text">
                  <span
                    >Pembelian {{ dataOrder.status }} pada
                    {{ $moment(dataOrder.updated_at).format('llll') }}</span
                  >
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mt-4">
                <div class="invoice-icon-box pb-2">
                  <div class="rounded-orange">
                    <img src="/icons-box.png" alt="" class="pb-1" />
                  </div>
                </div>
                <div class="invoice-headline col-12 col-md-8">
                  <span>{{ dataOrder.invoice }}</span
                  ><img
                    class="pl-3"
                    style="cursor: copy"
                    src="/vector-copy.png"
                    alt="Salin"
                    @click="copyText(dataOrder.invoice)"
                  />
                  <br />
                  <p>
                    Invoice untuk {{ dataOrder.shipping.name }} (
                    {{ dataOrder.email }} )
                  </p>
                </div>
                <div class="description-contact ml-auto mr-3 d-none d-md-flex">
                  <span>Hubungi Penjual</span>
                </div>
                <div class="rounded-orange d-none d-md-flex">
                  <img src="/icons-whatsapp.png" alt="" />
                </div>
              </div>
              <div class="banner-invoice">
                <img src="/banner-1.png" class="w-100" alt="" />
              </div>
              <b-row class="mt-4">
                <b-col
                  v-if="
                    ['PEMBAYARAN DITOLAK', 'KADALUARSA', 'DIBATALKAN'].includes(
                      dataOrder.status
                    )
                  "
                  class="col-6 col-md-3 p-1"
                >
                  <div
                    :class="
                      [
                        'PEMBAYARAN DITOLAK',
                        'KADALUARSA',
                        'DIBATALKAN',
                      ].includes(dataOrder.status)
                        ? 'detail-status text-center'
                        : 'detail-status-accepted text-center'
                    "
                  >
                    {{ dataOrder.status }}
                  </div>
                </b-col>
                <b-col v-else class="col-6 col-md-3 p-1">
                  <div
                    :class="
                      [
                        'MENUNGGU PEMBAYARAN',
                        'PEMBAYARAN BERHASIL',
                        'DIKIRIM',
                        'DITERIMA',
                      ].includes(dataOrder.status)
                        ? 'detail-status text-center'
                        : 'detail-status-accepted text-center'
                    "
                  >
                    Menunggu Pembayaran
                  </div>
                </b-col>
                <b-col class="col-6 col-md-3 p-1">
                  <div
                    :class="
                      ['PEMBAYARAN BERHASIL', 'DIKIRIM', 'DITERIMA'].includes(
                        dataOrder.status
                      )
                        ? 'detail-status text-center'
                        : 'detail-status-accepted text-center'
                    "
                  >
                    Pembayaran Berhasil
                  </div>
                </b-col>
                <b-col class="col-6 col-md-3 p-1">
                  <div
                    :class="
                      ['DIKIRIM', 'DITERIMA'].includes(dataOrder.status)
                        ? 'detail-status text-center'
                        : 'detail-status-accepted text-center'
                    "
                  >
                    Dikirim
                  </div>
                </b-col>
                <b-col class="col-6 col-md-3 p-1">
                  <div
                    :class="
                      ['DITERIMA'].includes(dataOrder.status)
                        ? 'detail-status text-center'
                        : 'detail-status-accepted text-center'
                    "
                  >
                    Diterima
                  </div>
                </b-col>
              </b-row>
              <div
                class="
                  head-order
                  d-flex
                  flex-row
                  align-items-center
                  mt-8
                  pt-3
                  pl-3
                "
              >
                <div class="rounded-title col-6 col-md-3">
                  <span>Pembelianmu</span>
                </div>
                <div class="description-order ml-auto d-none d-md-flex pr-3">
                  <span>Waktu pembelian</span>
                </div>
                <div class="rounded-purple col-6 col-md-3">
                  <img src="/icons-date.png" />
                  {{
                    $moment(dataOrder.created_at).format('Do MMM YYYY hh:mm')
                  }}
                </div>
              </div>
              <b-row class="mt-4">
                <b-col
                  v-for="(data, index) in dataOrder.items"
                  :key="index"
                  class="card-product mb-3 col-6 col-md-3 p-1"
                >
                  <div class="image-product">
                    <img
                      :src="formatJson(data.product.media)"
                      :alt="data.product.name"
                      class="rounded mx-auto d-block"
                    />
                  </div>
                  <div class="card-detail">
                    <div class="card-detail-title">
                      <div class="text-center mt-3">
                        <span class="title-product">{{
                          data.product.name
                        }}</span>
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
                          >{{ data.product.weight }}g/{{
                            onKilo(data.product.weight)
                          }}kg</span
                        >
                      </div>
                      <div class="w-100 d-flex card-detail-quality">
                        <span class="w-50 d-inline-block">Harga</span>
                        <span class="w-50 d-inline-block text-right">{{
                          formatRupiah(data.product.price, 'Rp')
                        }}</span>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <div v-if="dataOrder.payments.length > 0">
                <b-row class="mt-4 d-flex justify-content-end">
                  <div class="d-flex payment justify-content-end pt-1 pr-3">
                    <span class="pr-2">Pembayaran melalui BCA</span>
                    <img src="/bca.png" alt="" />
                  </div>
                </b-row>
                <div class="payment-construct mt-4">
                  <div class="d-flex flex-row align-items-center mt-2">
                    <div class="rounded-title col-6 col-md-3">
                      <span>Pembayaranmu</span>
                    </div>
                    <div
                      class="description-order ml-auto mr-3 d-none d-md-flex"
                    >
                      <span>Pembayaran terakhir</span>
                    </div>
                    <div class="rounded-purple col-6 col-md-3">
                      <img
                        src="/icons-date.png
"
                        alt=""
                      />
                      {{
                        $moment(
                          dataOrder.payments[dataOrder.payments.length - 1]
                            .created_at
                        ).format('Do MMM YYYY hh:mm')
                      }}
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
              </div>
            </b-col>
            <b-col cols="12" md="4">
              <div class="map-construct">
                <div class="d-flex flex-row align-items-center">
                  <div class="invoice-icon-box">
                    <div class="rounded-orange">
                      <img src="/icons-truck.png" alt="" />
                    </div>
                  </div>
                  <div class="invoice-headline pl-3">
                    <span>Pengiriman</span
                    ><img
                      class="pl-3"
                      src="/vector-copy.png"
                      alt="Salin"
                      style="cursor: copy"
                      @click="
                        copyText(
                          dataOrder.tracking_number
                            ? dataOrder.tracking_number
                            : 'Belum tersedia'
                        )
                      "
                    />
                    <br />
                    <p>
                      {{
                        dataOrder.tracking_number
                          ? dataOrder.tracking_number
                          : 'Belum tersedia'
                      }}
                    </p>
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
                        <div
                          v-b-tooltip.hover
                          class="sender-address"
                          :title="dataOrder.shipping_from.address"
                        >
                          {{ textLimit(dataOrder.shipping_from.address) }}
                        </div>
                        <br />
                        <div class="sender-title">Penerima</div>
                        <div class="sender-name">
                          {{ dataOrder.shipping.name }}
                        </div>
                        <div
                          v-b-tooltip.hover
                          class="sender-address"
                          :title="dataOrder.shipping.address"
                        >
                          {{ textLimit(dataOrder.shipping.address) }}
                        </div>
                      </b-col>
                    </b-row>
                    <b-row class="text-center">
                      <b-col cols="12 mt-4">
                        <img width="120" src="/jne.png" alt="" />
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
                    ><img
                      class="pl-3"
                      src="/vector-copy.png"
                      style="cursor: copy"
                      alt="Salin"
                      @click="
                        copyText(formatRupiah(dataOrder.grand_total, 'Rp'))
                      "
                    />
                    <br />
                    <p>
                      <b>{{ formatRupiah(dataOrder.grand_total, 'Rp') }}</b>
                    </p>
                  </div>
                </div>
                <div class="w-100 d-flex detail-price mb-2">
                  <span class="w-50 d-inline-block">Sub Total</span>
                  <span class="w-50 d-inline-block text-right">{{
                    formatRupiah(dataOrder.subtotal, 'Rp')
                  }}</span>
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
                  <span class="w-50 d-inline-block text-right">{{
                    formatRupiah(dataOrder.shipping_total, 'Rp')
                  }}</span>
                </div>
                <div class="w-100 d-flex detail-price mb-5">
                  <span class="w-50 d-inline-block">Total</span>
                  <span class="w-50 d-inline-block text-right">{{
                    formatRupiah(dataOrder.grand_total, 'Rp')
                  }}</span>
                </div>
                <div class="w-100 d-flex detail-price mb-5">
                  <span class="w-50 d-inline-block">Total</span>
                  <span class="w-50 d-inline-block text-right"
                    ><b>{{
                      formatRupiah(dataOrder.grand_total, 'Rp')
                    }}</b></span
                  >
                </div>
                <div
                  v-if="dataOrder.status === 'MENUNGGU PEMBAYARAN'"
                  class="w-100 text-center border-r-10"
                  @click="submit"
                >
                  Bayar
                </div>
                <div v-else class="w-100 text-center border-r-10">
                  Pembelian Selesai
                </div>
                <div class="text-left mt-2 fonts-2">
                  Membayar dengan CheckoutAja, Anda menyatakan bahwa Anda telah
                  menyetujui
                  <a href="https://checkoutaja.com/terms" class="note-org">
                    Syarat dan Ketentuan
                  </a>
                  yang berlaku.
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
      dataOrder: false,
      copyMessage: '',
    }
  },
  async fetch() {
    const params = await this.slug
    const dataFetch = await fetch(
      `https://api.checkoutaja.com/v1/orders/find-by-token?identity=${params}`
    ).then((res) => res.json())
    this.dataOrder = dataFetch
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
    async submit() {
      const paramEmail = this.dataOrder.email
      const paramInvoice = this.dataOrder.invoice
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('email', paramEmail)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      }

      const dataFetch = await fetch(
        `https://api.checkoutaja.com/v1/payment-gateway/create?invoice=${paramInvoice}`,
        requestOptions
      ).then((res) => res.json())
      const tokenMidtrans = dataFetch.token

      window.snap.pay(tokenMidtrans, {
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
    formatRupiah(angka, prefix) {
      const numberString = angka.replace(/[^,\d]/g, '').toString()
      const split = numberString.split(',')
      const sisa = split[0].length % 3
      let rupiah = split[0].substr(0, sisa)
      const ribuan = split[0].substr(sisa).match(/\d{3}/gi)

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        const separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }

      rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
      return prefix === undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : ''
    },
    onKilo(angka) {
      const hasil = angka / 1000
      return hasil
    },
    formatJson(data) {
      const result = JSON.parse(data)[0]
      return result
    },
    textLimit(text) {
      return text.slice(0, 40) + (text.length > 40 ? '...' : '')
    },
    async copyText(text) {
      await this.$copyText(text)
      this.copyMessage = `${text} berhasil disalin`
    },
  },
}
</script>
