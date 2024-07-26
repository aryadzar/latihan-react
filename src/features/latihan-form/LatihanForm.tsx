import { FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./LatihanForm.css"

export default function LatihanForm(){
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const handleSubmit = (e:FormEvent)=>{
      e.preventDefault();
      console.log('nama',nama);
      console.log('email',email);
      console.log('phone',phone);
    }


    return (
        <>
          <form className="latihan_form" onSubmit={handleSubmit}>
            <h2>Form Biodata</h2>
            <div className="latihan_form_item">
              <label htmlFor="">Nama</label>
              <Input
                onChange={(e)=> {setNama(e.target.value);}}
                style={{ marginLeft: 10 }}
                value={nama}
                placeholder="Masukan Nama"
                required
              />
            </div>
            <div className="latihan_form_item">
              <label htmlFor="">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e)=> {setEmail(e.target.value);}}
                style={{ marginLeft: 10 }}
                placeholder="Masukan Email"
              />
            </div>
            <div className="latihan_form_item">
              <label htmlFor="">Telephon</label>
              <Input
                type="number"
                onChange={(e)=> {setPhone(e.target.value);}}
                value={phone}
                style={{ marginLeft: 10 }}
                placeholder="Masukan Telephon"
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <Button label="Submit" />
            </div>
          </form>
        </>
      );
}