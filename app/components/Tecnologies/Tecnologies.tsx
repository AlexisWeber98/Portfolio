import Image from "next/image";
export default function Tecnologies() {
  const javascript =
    "https://imgs.search.brave.com/bYx2XkEAjlk_QhAmm2fU8wqjZ3dmitrTFgHAvfVtjAo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsLzNCcFVEQnND/M29mQnk0dG9yVDFa/aVVGNmhkb25xcFJI/ODQxTWVNRE0ucG5n";
  const typescript =
    "https://imgs.search.brave.com/waS-yqYaOm2YnmdKYThvlNHpVNhvsV7scD2Xj5si22A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsL3hLR3hPUndz/SFJYalRDdnZWbmha/YjVQd211ZEE5dE1S/d29vNUMwa3UucG5n";
  const react =
    "https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw";
  const redux =
    "https://imgs.search.brave.com/KePohzURycXSLJrpxe7_HH8ucEiIKXd-OgF3X_Meve0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpXY1JuVTJF/UnFZSFpCS0JRMHpY/Q3ZnLnBuZw";
  const vite =
    "https://imgs.search.brave.com/WEKiu64ptCegp7DWVrJNCwYyKAEpG210_Ezf_mQC76I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXRl/anMuZGV2L2xvZ28t/d2l0aC1zaGFkb3cu/cG5n";
  const next =
    "https://imgs.search.brave.com/gxFB2x3C7_vcbRGB2f3P5tRfPiKUtHmC94hVUKUD3Ks/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmV4dC1q/cy1sb2dvLTc5MjlC/Q0QzNkYtc2Vla2xv/Z28uY29tLnBuZw";
  const css =
    "https://imgs.search.brave.com/FsAUpsRF7OqgPULWB0rDr_ckcbpYYB2eskmiEMUFJ0g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vY3NzcGFn/ZXMvaW1hZ2VzL2Nz/cy10dXRvcmlhbC5w/bmc";
  const html =
    "https://imgs.search.brave.com/dy3YubVbx3x0XOSwG63Q47PQoqOw-oZxYt9o8oNzxhM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n";
  const images = [javascript, typescript, react, redux, vite, next, css, html];
  return (
    <main>
      {images.map((tec) => {
        return (
          <Image
            src={tec}
            alt={tec}
            key={tec}
            width={60}
            height={50}
            style={{ backgroundColor: "white" }}
          />
        );
      })}
    </main>
  );
}
