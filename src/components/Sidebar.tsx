import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import type { ReactNode } from 'react'

export function Sidebar({
	children,
}: {
	children: ReactNode
}) {
	return (
		<Sheet>
			{children}
			<SheetPortal>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
            <div>
              hello
            </div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button>Save changes</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</SheetPortal>
		</Sheet>
	)
}

Sidebar.Button = SheetTrigger
