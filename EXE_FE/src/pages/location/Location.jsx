import * as React from "react";



const Location = () => {
  // const componentRef = React.useRef(null);

  // const handleAfterPrint = React.useCallback(() => {
  //   console.log("`onAfterPrint` called");
  //   window.dispatchEvent(new KeyboardEvent('keydown', {
  //     key: 'Enter',
  //     code: 'Enter',
  //     bubbles: true
  //   }));
  // }, []);

  // const handleBeforePrint = React.useCallback(() => {
  //   console.log("`onBeforePrint` called");
  //   return Promise.resolve();
  // }, []);

  // const printFn = useReactToPrint({
  //   contentRef: componentRef,
  //   onAfterPrint: handleAfterPrint,
  //   onBeforePrint: handleBeforePrint,
  // });

  // return (
  //   <div>
  //     <button onClick={printFn}>Print</button>
  //     <ComponentToPrint ref={componentRef} />
  //   </div>
  // );


  const pdfUrl = "https://storage.googleapis.com/download/storage/v1/b/four-gems.appspot.com/o/11-Thu%20Mar%2020%2016:03:54%20ICT%202025.pdf?generation=1742461437063307&alt=media";

  // const handlePrintPDF = async () => {
  //   try {
  //     // Tải PDF từ URL
  //     const response = await fetch(pdfUrl);
  //     const blob = await response.blob();

  //     // Tạo URL object từ blob
  //     const pdfObjectUrl = URL.createObjectURL(blob);

  //     // Mở PDF trong tab mới
  //     const printWindow = window.open(pdfObjectUrl);


  //     printWindow.onload = () => {
  //       // In trực tiếp với cài đặt mặc định của máy in
  //       printWindow.print({
  //         silent: true, // Bỏ qua hộp thoại cài đặt in
  //         printBackground: false, // In cả background
  //         key: 'Enter'

  //       });

  //       setTimeout(() => {
  //         printWindow.close();
  //         URL.revokeObjectURL(pdfObjectUrl);
  //       }, 1000);
  //     };

  //   } catch (error) {
  //     console.error("Lỗi khi tải và in PDF:", error);
  //   }
  // };

  const handlePrintPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const pdfObjectUrl = URL.createObjectURL(blob);

      const printWindow = window.open(pdfObjectUrl, '_blank', 'width=800,height=600');

      if (printWindow) {
        printWindow.addEventListener('load', function () {
          try {
            printWindow.focus();
            printWindow.print();
          } catch (err) {
            console.error("Lỗi khi in:", err);
            printWindow.close();
          }
        });
      }
    } catch (error) {
      console.error("Lỗi khi tải PDF:", error);
    }
  };



  return (
    <div>
      <button onClick={handlePrintPDF}>In file PDF</button>
    </div>
  );
};

export default Location;
