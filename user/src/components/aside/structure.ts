import { Settings, MessageCircleIcon, Phone, Star, BoxIcon } from "lucide-react";
import { LucideProps } from "lucide-react";

interface SidebarItemProps{
    id: string;
    title: string;
    name: string;
    parent?: boolean;
    icon: string | React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    link: string;
    child?: SidebarItemProps[]; 
    height: string;
}


const sidebarStructureBottom:SidebarItemProps[]  = [
  {
    id: "Starred messags",
    title: "Starred messags",
    name: "Starred messags",
    parent: true,
    icon: Star,
    link: "/starred-messags",
    height:"0px"
  },
  {
    id: "Archeived chats",
    title: "Archeived chats",
    name: "Archeived chats",
    parent: true,
    icon: BoxIcon,
    link: "/archeived-chats",
    height:"0px"
  },
  {
    id: "settings",
    title: "Settings",
    name: "Settings",
    parent: true,
    icon: Settings,
    link: "/settings",
    height:"0px"
  },
]

const sidebarStructure:SidebarItemProps[]  = [
    {
      id: "Chats",
      title: "Chats",
      name: "Chats",
      parent: true,
      icon: MessageCircleIcon,
      link: "/chat-list",
      height:"0px"
    },
    {
      id: "Calls",
      title: "Calls",
      name: "Calls",
      parent: true,
      icon: Phone,
      link: "/Calls",
      height:"0px"
    },
    // {
    //   id: "transaksi",
    //   title: "Transaksi",
    //   name: "transaksi",
    //   parent: true,
    //   icon: "transaksi",
    //   child: [
    //     {
    //       id: "rfq",
    //       title: "RFQ",
    //       name: "transaksi.rfq",
    //       link: "/dashboard/rfq",
    //       icon: "dot"
    //     },
    //     {
    //       id: "quotation",
    //       title: "Quotation",
    //       name: "transaksi.quotation",
    //       link: "/dashboard/quotation",
    //       icon: "dot"
    //     },
    //     {
    //       id: "purchase-request",
    //       title: "Purchase Request",
    //       name: "transaksi.pr",
    //       link: "/dashboard/purchase-request",
    //       icon: "dot"
    //     },
    //     {
    //       id: "purchase-order",
    //       title: "Purchase Order",
    //       name: "transaksi.po",
    //       link: "/dashboard/purchase-order",
    //       icon: "dot"
    //     },
    //     {
    //       id: "tagihan",
    //       title: "Tagihan",
    //       name: "transaksi.tagihan",
    //       link: "/dashboard/invoice",
    //       icon: "dot"
    //     },
    //     {
    //       id: "pembayaran",
    //       title: "Pembayaran",
    //       name: "transaksi.pembayaran",
    //       link: "/dashboard/payment",
    //       icon: "dot"
    //     }
    //   ]
    // },
    // {
    //   id: "perusahaan",
    //   title: "Perusahaan",
    //   name: "perusahaan",
    //   parent: true,
    //   icon: "perusahaan",
    //   child: [
    //     {
    //       id: "profile-perusahaan",
    //       title: "Profil Perusahaan",
    //       name: "perusahaan.profil",
    //       link: "/dashboard/company-profile",
    //       icon: "dot"
    //     },
    //     {
    //       id: "akun-bank",
    //       title: "Akun Bank",
    //       name: "perusahaan.bank",
    //       link: "/dashboard/bank-account",
    //       icon: "dot"
    //     },
    //     {
    //       id: "alamat",
    //       title: "Alamat",
    //       name: "perusahaan.alamat",
    //       link: "/dashboard/company-address/shipping",
    //       icon: "dot",
    //       child: [
    //         {
    //           id: "alamat-pengiriman",
    //           title: "Alamat Pengiriman",
    //           name: "perusahaan.alamat.pengiriman",
    //           link: "/dashboard/company-address/shipping",
    //           icon: "dot"
    //         },
    //         {
    //           id: "alamat-tagihan",
    //           title: "Alamat Tagihan",
    //           name: "perusahaan.alamat.tagihan",
    //           link: "/dashboard/company-address/billing",
    //           icon: "dot"
    //         }
    //       ]
    //     },
    //     {
    //       id: "daftar-akun-pengguna",
    //       title: "Daftar Akun Pengguna",
    //       name: "perusahaan.akun",
    //       link: "/dashboard/user-account",
    //       icon: "dot"
    //     },
    //     {
    //       id: "departemen",
    //       title: "Departemen",
    //       name: "perusahaan.department",
    //       link: "/dashboard/department",
    //       icon: "dot"
    //     },
    //     {
    //       id: "manajemen-persetujuan",
    //       title: "Manajemen Persetujuan",
    //       name: "perusahaan.persetujuan",
    //       icon: "dot",
    //       child: [
    //         {
    //           id: "penyetuju-kategori",
    //           title: "Penyetuju Kategori",
    //           name: "perusahaan.persetujuan.kategori",
    //           link: "/dashboard/approval/category",
    //           icon: "dot"
    //         },
    //         {
    //           id: "penyetuju-departement",
    //           title: "Penyetuju Departemen",
    //           name: "perusahaan.persetujuan.departemen",
    //           link: "/dashboard/approval/department",
    //           icon: "dot"
    //         },
    //         {
    //           id: "e-procurement",
    //           title: "E-procurement",
    //           name: "perusahaan.persetujuan.proc",
    //           link: "/dashboard/approval/eproc",
    //           icon: "dot"
    //         },
    //         {
    //           id: "pengaturan",
    //           title: "Pengaturan",
    //           name: "perusahaan.persetujuan.config",
    //           link: "/dashboard/approval/configure",
    //           icon: "dot"
    //         }
    //       ]
    //     },
    //     {
    //       id: "pengaturan-pembelian",
    //       title: "Pengaturan Pembelian",
    //       name: "perusahaan.pengaturan.pembelian",
    //       icon: "dot",
    //       child: [
    //         {
    //           id: "anggaran",
    //           title: "Anggaran",
    //           name: "perusahaan.pengaturan.pembelian.anggaran",
    //           link: "/dashboard/purchase-setting/budget",
    //           icon: "dot"
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: "mou",
    //   title: "MOU",
    //   name: "mou",
    //   parent: true,
    //   icon: "mou",
    //   link: "/dashboard/mou"
    // },
    // {
    //   id: "pusat-unduh-data",
    //   title: "Pusat Unduh Data",
    //   name: "pusatunduhdata",
    //   parent: true,
    //   icon: "pusatunduhdata",
    //   child: [
    //     {
    //       id: "unduh-data-transaksi",
    //       title: "Unduh Data Transaksi",
    //       name: "pusatunduhdata.unduhdatatransaksi",
    //       link: "/dashboard/download/transaction",
    //       icon: "dot"
    //     },
    //     {
    //       id: "unduh-data-perusahaan",
    //       title: "Unduh Data Perusahaan",
    //       name: "pusatunduhdata.unduhdataperusahaan",
    //       link: "/dashboard/download/company",
    //       icon: "dot"
    //     },
    //     {
    //       id: "unduh-data-mou",
    //       title: "Unduh Data MOU",
    //       name: "pusatunduhdata.unduhdatamou",
    //       link: "/dashboard/download/mou",
    //       icon: "dot"
    //     }
    //   ]
    // }
  ];
  
  export { sidebarStructure, sidebarStructureBottom };
  