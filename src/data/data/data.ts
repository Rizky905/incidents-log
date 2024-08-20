type IData = {
  id: number;
  apps: string;
  request_by: string;
  request_date: Date;
  main_pic: string;
  email_pic: string;
  level_error: "HIGH" | "LOW";
  description: string;
  status: "PROCESSING" | "DONE";
  done_by: string;
  done_date: Date;
  evidence: string;
};

const Datas: IData[] = [
  {
    id: 1,
    apps: "edocs",
    request_by: "Rizky_E",
    request_date: new Date(2024, 1, 1),
    main_pic: "Rikky",
    email_pic: "Rikky@id.msig-asia.com",
    level_error: "HIGH",
    description: "error dalam halaman input data",
    status: "DONE",
    done_by: "Rikky",
    done_date: new Date(2024, 1, 1),
    evidence: "Image",
  },
  {
    id: 2,
    apps: "invoice registration",
    request_by: "Minar",
    request_date: new Date(2024, 1, 1),
    main_pic: "Rizky_E",
    email_pic: "Rizky_E@id.msig-asia.com",
    level_error: "HIGH",
    description: "error dalam halaman input data",
    status: "DONE",
    done_by: "Rizky_E",
    done_date: new Date(2024, 1, 1),
    evidence: "Image",
  },
];

export default Datas;
