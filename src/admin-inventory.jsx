
import Header from "./components/layout/Header";
import Layout from "./components/admin/layout/Layout";
import InventoryTable from "./components/admin/layout/InventoryTable";
const InventoryManagement = () => {
  return (
    <>
      <Layout>
        <div className="p-5">
          <Header />

          <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
            <div>
              <h5 className="heading mt-4">Inventory</h5>
              <p className="paragraph mb-0">
                You are now seeing the inventory, you can update the inventory,
                set par, and get emails about the inventory.
              </p>
            </div>
          </div>

          <div className="tablecard">
            <InventoryTable />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InventoryManagement;
