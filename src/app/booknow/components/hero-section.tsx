import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UserForm } from './form'

export const HeroSection = () => {
  return (
    <div className="backdrop-brightness-50">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-4 px-4 pt-12 md:flex-row md:items-start">
        <div className="max-w-md space-y-3 text-white">
          <p className="text-2xl font-bold">
            🥇#1 Rated Cleaning Company in Philadelphia & Pennsylvania
          </p>
          <h1 className="text-6xl font-black leading-tight tracking-tight md:text-[5rem] ">
            TOP🥇 RATED CLEANING SERVICES
          </h1>
          <p className="text-2xl font-bold">
            Residential | Move In/ Out Cleans | Deep Cleans| Post- Construction
          </p>
          <p className="text-xl font-bold">No Damage Guarantee👍</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="mx-auto flex flex-col py-10 font-medium md:mx-0"
                size="xl"
              >
                <span className="text-2xl font-bold">GET $30 OFF TODAY!</span>
                <span>click here</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0">
              <ScrollArea className="max-h-screen md:max-h-[80vh]">
                <Card>
                  <CardContent className="space-y-4 p-12">
                    <h2 className="text-center text-3xl font-bold tracking-tighter">
                      Fill out the form below and We will text you with a quote
                      !
                    </h2>
                    <UserForm />
                  </CardContent>
                </Card>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <h2
            id="form"
            className="text-center text-3xl font-bold tracking-tighter text-white"
          >
            Fill out the form below and We will text you with a quote !
          </h2>
          <Card className="mb-10 mt-4">
            <CardContent className="px-8 py-12">
              <UserForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
