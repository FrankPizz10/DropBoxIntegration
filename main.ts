import { Dropbox } from "dropbox";

const secret_key =
  "sl.BbVzaKsfCfcrrOLG-ZkFq6nmTBjdZCQQhKuPJ0og05NWTr1mX9YukutcBDlSCHiAN48YS5Y1mkE8o2XnP4xuJywRUmbOtS7jFaLhgRwGexy5qWxHKsJO2XMUVCckGlnp1rvmvdc";

const dropbox = new Dropbox({
  accessToken: secret_key,
});

dropbox
  .filesListFolder({
    path: "",
  })
  .then((response) => console.log(response));
