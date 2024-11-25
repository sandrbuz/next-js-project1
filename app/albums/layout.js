import { CustomStoreProvider } from "@/customContextStore/CustomContextStore";

export default function AlbumsLayout({ children }) {
    return (
        <CustomStoreProvider>
                <div>{children}</div>
        </CustomStoreProvider>

    );
}