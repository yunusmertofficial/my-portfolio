import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      // window.scrollY: Kullanıcı sayfanın en üstündeyken window.scrollY değeri 0'dır. Sayfa aşağı doğru kaydırıldıkça bu değer artar.,
      // document.body.scrollHeight: sayfa boyunca kaydırılabilecek toplam yüksekliktir.
      // window.innerHeight: tarayıcı arayüz elemanlarını (örneğin, adres çubuğu ve sekmeler) içermeyen saf içerik alanının yüksekliğini verir.
      const currentProgress = window.scrollY;
      //scrollHeight değişkeni sayfanın görünmeyen kısmının yüksekliğini verir. Bu değer, sayfanın üstünden itibaren kaydırılması gereken maksimum mesafeyi temsil eder
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        /*        
            scrollHeight = 5000 - 1000 = 4000 piksel.
            Kullanıcı 1000 piksel kaydırdığı için currentProgress = 1000 piksel.
            İlerleme oranı: 1000 / 4000 = 0.25.
            .toFixed(2) sonrası değer: 0.25 (zaten iki ondalık basamağa sahip olduğu için değişmez).
            Yüzde cinsinden ilerleme: 0.25 * 100 = 25.
         */
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    // event
    window.addEventListener("scroll", updateScrollCompletion);
    // clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
