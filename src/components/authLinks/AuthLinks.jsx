import Link from "next/link";

const AuthLinks = () => {
    const status = "authenticated";
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className="cursor-pointer">Logout</span>
                </>
            )}
        </>
    )
}

export default AuthLinks;