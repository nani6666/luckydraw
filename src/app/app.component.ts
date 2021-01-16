import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 500, noPause: true, showIndicators: false } }
  ]
})
export class AppComponent {
  itemsPerSlide = 1;
  subscription: Subscription;
  intervalId: any;

  singleSlideOffset = true;
   customersArray = [
    {
      "customerId": "MLM00001",
      "superSale": "Yes"
    },
    {
      "customerId": "MLM00002",
      "superSale": "Yes"
    },
    {
      "customerId": "MLM00003",
      "superSale": "No"
    },
    {
      "customerId": "MLM00004",
      "superSale": "No"
    },
    {
      "customerId": "MLM00005",
      "superSale": "No"
    },
    {
      "customerId": "MLM00006",
      "superSale": "No"
    },
    {
      "customerId": "MLM00007",
      "superSale": "No"
    },
    {
      "customerId": "MLM00008",
      "superSale": "Yes"
    },
    {
      "customerId": "MLM00009",
      "superSale": "Yes"
    },
    {
      "customerId": "MLM000010",
      "superSale": "No"
    },
    {
      "customerId": "MLM000011",
      "superSale": "No"
    },
    {
      "customerId": "MLM000012",
      "superSale": "No"
    },
    {
      "customerId": "MLM000013",
      "superSale": "No"
    },
    {
      "customerId": "MLM000014",
      "superSale": "No"
    },
    {
      "customerId": "MLM000015",
      "superSale": "No"
    },
    {
      "customerId": "MLM000016",
      "superSale": "Yes"
    },
    {
      "customerId": "MLM000017",
      "superSale": "No"
    },
    {
      "customerId": "MLM000018",
      "superSale": "No"
    },
    {
      "customerId": "MLM000019",
      "superSale": "No"
    },
    {
      "customerId": "MLM000020",
      "superSale": "No"
    },
    {
      "customerId": "MLM000021",
      "superSale": "No"
    },
    {
      "customerId": "MLM000022",
      "superSale": "No"
    },
    {
      "customerId": "MLM000023",
      "superSale": "No"
    },
    {
      "customerId": "MLM000024",
      "superSale": "No"
    },
    {
      "customerId": "MLM000025",
      "superSale": "No"
    },
    {
      "customerId": "MLM000026",
      "superSale": "No"
    },
    {
      "customerId": "MLM000027",
      "superSale": "No"
    },
    {
      "customerId": "MLM000028",
      "superSale": "No"
    },
    {
      "customerId": "MLM000029",
      "superSale": "No"
    },
    {
      "customerId": "MLM000030",
      "superSale": "No"
    },
    {
      "customerId": "MLM000031",
      "superSale": "No"
    },
    {
      "customerId": "MLM000032",
      "superSale": "No"
    },
    {
      "customerId": "MLM000033",
      "superSale": "No"
    },
    {
      "customerId": "MLM000034",
      "superSale": "No"
    },
    {
      "customerId": "MLM000035",
      "superSale": "No"
    },
    {
      "customerId": "MLM000036",
      "superSale": "No"
    },
    {
      "customerId": "MLM000037",
      "superSale": "No"
    },
    {
      "customerId": "MLM000038",
      "superSale": "No"
    },
    {
      "customerId": "MLM000039",
      "superSale": "No"
    },
    {
      "customerId": "MLM000040",
      "superSale": "No"
    },
    {
      "customerId": "MLM000041",
      "superSale": "No"
    },
    {
      "customerId": "MLM000042",
      "superSale": "No"
    },
    {
      "customerId": "MLM000043",
      "superSale": "No"
    },
    {
      "customerId": "MLM000044",
      "superSale": "No"
    },
    {
      "customerId": "MLM000045",
      "superSale": "No"
    },
    {
      "customerId": "MLM000046",
      "superSale": "No"
    },
    {
      "customerId": "MLM000047",
      "superSale": "No"
    },
    {
      "customerId": "MLM000048",
      "superSale": "No"
    },
    {
      "customerId": "MLM000049",
      "superSale": "No"
    },
    {
      "customerId": "MLM000050",
      "superSale": "No"
    },
    {
      "customerId": "MLM000051",
      "superSale": "No"
    },
    {
      "customerId": "MLM000052",
      "superSale": "No"
    },
    {
      "customerId": "MLM000053",
      "superSale": "No"
    },
    {
      "customerId": "MLM000054",
      "superSale": "No"
    },
    {
      "customerId": "MLM000055",
      "superSale": "No"
    },
    {
      "customerId": "MLM000056",
      "superSale": "No"
    },
    {
      "customerId": "MLM000057",
      "superSale": "No"
    },
    {
      "customerId": "MLM000058",
      "superSale": "No"
    },
    {
      "customerId": "MLM000059",
      "superSale": "No"
    },
    {
      "customerId": "MLM000060",
      "superSale": "No"
    },
    {
      "customerId": "MLM000061",
      "superSale": "No"
    },
    {
      "customerId": "MLM000062",
      "superSale": "No"
    },
    {
      "customerId": "MLM000063",
      "superSale": "No"
    },
    {
      "customerId": "MLM000064",
      "superSale": "No"
    },
    {
      "customerId": "MLM000065",
      "superSale": "No"
    },
    {
      "customerId": "MLM000066",
      "superSale": "No"
    },
    {
      "customerId": "MLM000067",
      "superSale": "No"
    },
    {
      "customerId": "MLM000068",
      "superSale": "No"
    },
    {
      "customerId": "MLM000069",
      "superSale": "No"
    },
    {
      "customerId": "MLM000070",
      "superSale": "No"
    },
    {
      "customerId": "MLM000071",
      "superSale": "No"
    },
    {
      "customerId": "MLM000072",
      "superSale": "No"
    },
    {
      "customerId": "MLM000073",
      "superSale": "No"
    },
    {
      "customerId": "MLM000074",
      "superSale": "No"
    },
    {
      "customerId": "MLM000075",
      "superSale": "No"
    },
    {
      "customerId": "MLM000076",
      "superSale": "No"
    },
    {
      "customerId": "MLM000077",
      "superSale": "No"
    },
    {
      "customerId": "MLM000078",
      "superSale": "No"
    },
    {
      "customerId": "MLM000079",
      "superSale": "No"
    },
    {
      "customerId": "MLM000080",
      "superSale": "No"
    },
    {
      "customerId": "MLM000081",
      "superSale": "No"
    },
    {
      "customerId": "MLM000082",
      "superSale": "No"
    },
    {
      "customerId": "MLM000083",
      "superSale": "No"
    },
    {
      "customerId": "MLM000084",
      "superSale": "No"
    },
    {
      "customerId": "MLM000085",
      "superSale": "No"
    },
    {
      "customerId": "MLM000086",
      "superSale": "No"
    },
    {
      "customerId": "MLM000087",
      "superSale": "No"
    },
    {
      "customerId": "MLM000088",
      "superSale": "No"
    },
    {
      "customerId": "MLM000089",
      "superSale": "No"
    },
    {
      "customerId": "MLM000090",
      "superSale": "No"
    },
    {
      "customerId": "MLM000091",
      "superSale": "No"
    },
    {
      "customerId": "MLM000092",
      "superSale": "No"
    },
    {
      "customerId": "MLM000093",
      "superSale": "No"
    },
    {
      "customerId": "MLM000094",
      "superSale": "No"
    },
    {
      "customerId": "MLM000095",
      "superSale": "No"
    },
    {
      "customerId": "MLM000096",
      "superSale": "No"
    },
    {
      "customerId": "MLM000097",
      "superSale": "No"
    },
    {
      "customerId": "MLM000098",
      "superSale": "No"
    },
    {
      "customerId": "MLM000099",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000100",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000101",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000102",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000103",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000104",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000105",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000106",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000107",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000108",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000109",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000110",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000111",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000112",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000113",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000114",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000115",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000116",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000117",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000118",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000119",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000120",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000121",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000122",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000123",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000124",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000125",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000126",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000127",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000128",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000129",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000130",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000131",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000132",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000133",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000134",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000135",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000136",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000137",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000138",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000139",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000140",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000141",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000142",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000143",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000144",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000145",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000146",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000147",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000148",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000149",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000150",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000151",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000152",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000153",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000154",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000155",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000156",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000157",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000158",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000159",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000160",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000161",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000162",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000163",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000164",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000165",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000166",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000167",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000168",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000169",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000170",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000171",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000172",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000173",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000174",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000175",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000176",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000177",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000178",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000179",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000180",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000181",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000182",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000183",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000184",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000185",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000186",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000187",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000188",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000189",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000190",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000191",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000192",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000193",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000194",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000195",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000196",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000197",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000198",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000199",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000200",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000201",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000202",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000203",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000204",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000205",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000206",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000207",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000208",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000209",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000210",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000211",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000212",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000213",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000214",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000215",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000216",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000217",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000218",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000219",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000220",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000221",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000222",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000223",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000224",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000225",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000226",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000227",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000228",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000229",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000230",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000231",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000232",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000233",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000234",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000235",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000236",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000237",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000238",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000239",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000240",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000241",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000242",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000243",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000244",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000245",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000246",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000247",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000248",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000249",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000250",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000251",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000252",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000253",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000254",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000255",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000256",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000257",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000258",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000259",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000260",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000261",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000262",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000263",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000264",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000265",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000266",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000267",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000268",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000269",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000270",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000271",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000272",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000273",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000274",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000275",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000276",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000277",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000278",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000279",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000280",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000281",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000282",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000283",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000284",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000285",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000286",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000287",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000288",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000289",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000290",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000291",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000292",
      "superSale": "No"
    },
    {
      "customerId": "MLM0000293",
      "superSale": "No"
    }
  ];
  
  goToLink(url: string){
    window.open(url, "_blank");
} 
ngOnInit() {
  //this.sheduledmethod();
}
// sheduledmethod(){
//   time 
//    this.intervalId = setInterval(this.luckyWinner(), 10000);
// }
// luckyWinner(param){

// }
}
