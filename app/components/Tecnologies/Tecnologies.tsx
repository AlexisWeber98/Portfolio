import Image from "next/image";
export default function Tecnologies() {
  const javascript =
    "https://imgs.search.brave.com/bYx2XkEAjlk_QhAmm2fU8wqjZ3dmitrTFgHAvfVtjAo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsLzNCcFVEQnND/M29mQnk0dG9yVDFa/aVVGNmhkb25xcFJI/ODQxTWVNRE0ucG5n";
  const typescript =
    "https://imgs.search.brave.com/waS-yqYaOm2YnmdKYThvlNHpVNhvsV7scD2Xj5si22A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsL3hLR3hPUndz/SFJYalRDdnZWbmha/YjVQd211ZEE5dE1S/d29vNUMwa3UucG5n";
  const react =
    "https://imgs.search.brave.com/ILiusQq7P7ItXce8lWcOqA4VT4xjcFN-rIwiMFboVSY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9yZWFjdC1p/Y29uLTI1NngyMjgt/OTdsdGdibDEucG5n";
  const redux =
    "https://imgs.search.brave.com/KePohzURycXSLJrpxe7_HH8ucEiIKXd-OgF3X_Meve0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpXY1JuVTJF/UnFZSFpCS0JRMHpY/Q3ZnLnBuZw";
  const vite =
    "https://imgs.search.brave.com/WEKiu64ptCegp7DWVrJNCwYyKAEpG210_Ezf_mQC76I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXRl/anMuZGV2L2xvZ28t/d2l0aC1zaGFkb3cu/cG5n";
  const next =
    "https://imgs.search.brave.com/JbHdV5OtqAIWazbWCKRJ8w3WfH_UC9ZUXAKQEx7zors/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmV4dC1q/cy1pY29uLWxvZ28t/RUUzMDJENURCRC1z/ZWVrbG9nby5jb20u/cG5n";
  const css =
    "https://imgs.search.brave.com/_L-kl-i8i-UK9FO7hwiZAqQB_NchiM9Hvfx_75-lW0A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n";
  const html =
    "https://imgs.search.brave.com/dy3YubVbx3x0XOSwG63Q47PQoqOw-oZxYt9o8oNzxhM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n";
  const images = [javascript, typescript, react, redux, vite, next, css, html];
  return (
    <main>
        <h3 className="title"> Tecnologías </h3>
        <div>
        {images.map((tec) => {
        return (
          <Image
            src={tec}
            alt={tec}
            key={tec}
            width={101}
            height={100}
            style={{ margin: 10, padding: 3 }}
          />
        );
      })} 
      <hr />
      
        </div>
      
    </main>
  );
}
