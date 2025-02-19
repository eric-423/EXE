import useIsomorphicLayoutEffect from "./uselsomorphicLayoutEffect";

export default function useDocumentTitle(title) {
    useIsomorphicLayoutEffect(() => {
        window.document.title = title;
    }, [title]);
}