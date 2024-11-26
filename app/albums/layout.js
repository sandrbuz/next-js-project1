import { CustomStoreProvider } from "@/app/albums/CustomContextStore";

export default function AlbumsLayout({ children }) {
    return (
        <CustomStoreProvider>
                <div>{children}</div>
        </CustomStoreProvider>

    );
}